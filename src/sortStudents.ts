
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function countAverageGrade(array: number[]): number {
  const arrLength = array.length;
  const result = array.reduce((a, b) => a + b) / arrLength;

  return result;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const result = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case SortType.Surname:
        result.sort((a, b) => a.surname.localeCompare(b.surname));
        break;

      case SortType.Age:
        result.sort((a, b) => a.age - b.age);
        break;

      case SortType.Married:
        result.sort((a, b) => a.married - b.married);
        break;

      case SortType.AverageGrade:
        result
          .sort((a, b) => countAverageGrade(a.grades)
            - countAverageGrade(b.grades));
        break;

      default:
        break;
    }
  } else {
    switch (sortBy) {
      case SortType.Name:
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case SortType.Surname:
        result.sort((a, b) => b.surname.localeCompare(a.surname));
        break;

      case SortType.Age:
        result.sort((a, b) => b.age - a.age);
        break;

      case SortType.Married:
        result.sort((a, b) => b.married - a.married);
        break;

      case SortType.AverageGrade:
        result
          .sort((a, b) => countAverageGrade(b.grades)
          - countAverageGrade(a.grades));
        break;

      default:
        break;
    }
  }

  return result;
}
