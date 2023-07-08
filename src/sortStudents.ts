
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

export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, curr) => sum + curr) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedStudents.sort(
        (a, b) => (order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
        ),
      );
      break;

    case SortType.Surname:
      sortedStudents.sort(
        (a, b) => (order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname)
        ),
      );
      break;

    case SortType.Age:
      sortedStudents.sort(
        (a, b) => (order === 'asc'
          ? a.age - b.age
          : b.age - a.age
        ),
      );
      break;

    case SortType.Married:
      sortedStudents.sort(
        (a, b) => {
          if (a.married === b.married) {
            return 0;
          }

          if ((a.married && order === 'asc') || b.married) {
            return 1;
          }

          return -1;
        },
      );
      break;

    case SortType.AverageGrade:
      sortedStudents.sort(
        (a, b) => (order === 'asc'
          ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
          : getAverageGrade(b.grades) - getAverageGrade(a.grades)
        ),
      );
      break;

    default:
      return sortedStudents;
  }

  return sortedStudents;
}
