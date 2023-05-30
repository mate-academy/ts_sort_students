export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  function averageGrade(student: Student): number {
    return student.grades
      .reduce((sum, grade) => sum + grade, 0) / student.grades.length;
  }

  let sortFunction: (firstStudent: Student, secondStudent: Student) => number;

  switch (sortBy) {
    case SortType.Name:
      sortFunction = (firstStudent, secondStudent): number => (
        firstStudent.name.localeCompare(secondStudent.name)
      );
      break;

    case SortType.Surname:
      sortFunction = (firstStudent, secondStudent): number => (
        firstStudent.surname.localeCompare(secondStudent.surname)
      );
      break;

    case SortType.Age:
      sortFunction = (firstStudent, secondStudent): number => (
        firstStudent.age - secondStudent.age
      );
      break;

    case SortType.Married:
      sortFunction = (firstStudent, secondStudent): number => (
        Number(firstStudent.married) - Number(secondStudent.married)
      );
      break;

    case SortType.AverageGrade:
      sortFunction = (firstStudent, secondStudent): number => (
        averageGrade(firstStudent) - averageGrade(secondStudent)
      );
      break;

    default:
      throw new Error('Incorrect sortBy value!');
  }

  switch (order) {
    case 'asc':
      copiedStudents.sort((firstStudent, secondStudent) => (
        sortFunction(firstStudent, secondStudent)
      ));
      break;

    case 'desc':
      copiedStudents.sort((firstStudent, secondStudent) => (
        sortFunction(secondStudent, firstStudent)
      ));
      break;

    default:
      throw new Error('Invalid order value');
  }

  return copiedStudents;
}
