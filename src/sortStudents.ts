
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

function calculateAverageGrade(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((acc, grade) => acc + grade, 0);

  return sum / grades.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: [],
  sortBy: SortType,
  order: SortOrder,
)
  :[] {
  const result: [] = JSON.parse(JSON.stringify(students));

  switch (sortBy) {
    case SortType.Name:
      return result.sort(
        (a: Student, b: Student) => {
          if (order === 'desc') {
            return b.name.localeCompare(a.name);
          }

          return a.name.localeCompare(b.name);
        },
      );

    case SortType.Surname:
      return result.sort(
        (a: Student, b: Student) => {
          if (order === 'desc') {
            b.surname.localeCompare(a.surname);
          }

          return a.surname.localeCompare(b.surname);
        },
      );

    case SortType.Age:
      return result.sort(
        (a: Student, b: Student) => {
          if (order === 'desc') {
            return b.age - a.age;
          }

          return a.age - b.age;
        },
      );

    case SortType.Married:
      return result.sort(
        (a: Student, b: Student) => {
          if (a.married && !b.married) {
            return -1;
          }

          if (!a.married && b.married) {
            return 1;
          }

          return 0;
        },
      );

    case SortType.AverageGrade:
      return result.sort(
        (a: Student, b: Student) => {
          const AStudentAverage = calculateAverageGrade(a.grades);
          const BStudentAverage = calculateAverageGrade(b.grades);

          if (order === 'desc') {
            return BStudentAverage - AStudentAverage;
          }

          return AStudentAverage - BStudentAverage;
        },
      );

    default:
      return [];
  }
}
