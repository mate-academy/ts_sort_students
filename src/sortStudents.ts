
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surName',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  sortOrder: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((firstStudent: Student, secondStudent: Student) => (
        firstStudent.name.localeCompare(secondStudent.name)
      ));
      break;

    case SortType.Surname:
      studentsCopy.sort((firstStudent: Student, secondStudent: Student) => (
        firstStudent.surname.localeCompare(secondStudent.surname)
      ));
      break;

    case SortType.Age:
      studentsCopy.sort((firstStudent: Student, secondStudent: Student) => {
        return sortOrder === 'asc'
          ? firstStudent.age - secondStudent.age
          : secondStudent.age - firstStudent.age;
      });
      break;

    case SortType.Married:
      studentsCopy.sort((firstStudent: Student, secondStudent: Student) => {
        return sortOrder === 'asc'
          ? (Number(firstStudent.married) - Number(secondStudent.married))
          : (Number(secondStudent.married) - Number(firstStudent.married));
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((firstStudent: Student, secondStudent: Student) => {
        const averageFirstStudentGrade = firstStudent.grades
          .reduce((sum, grade) => sum + grade, 0) / firstStudent.grades.length;
        const averageSecondStudentGrade = secondStudent.grades
          .reduce((sum, grade) => sum + grade, 0) / secondStudent.grades.length;

        return sortOrder === 'asc'
          ? averageFirstStudentGrade - averageSecondStudentGrade
          : averageSecondStudentGrade - averageFirstStudentGrade;
      });
      break;

    default:
      throw new Error();
  }

  return studentsCopy;
}
