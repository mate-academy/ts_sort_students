
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(grades: number[]): number {
  const totalGrade = grades.reduce((sum, grade) => sum + grade, 0);
  const averageStudentsGrade = totalGrade / grades.length;

  return averageStudentsGrade;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  sortOrder: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((firstStudent: Student, secondStudent: Student) => (
        firstStudent[sortBy].localeCompare(secondStudent[sortBy])
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
        const averageFirstStudentGrade = calculateAverageGrade(
          firstStudent.grades,
        );
        const averageSecondStudentGrade = calculateAverageGrade(
          secondStudent.grades,
        );

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
