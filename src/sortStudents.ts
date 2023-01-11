import { Student } from './sortStudents';
import { Key } from "readline";

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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(numbers: number[]): number {
  const sum = [...numbers].reduce((acc: number, current: number) => {
    return acc + current;
  }, 0);

  return sum / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return copiedStudents.sort(
          (a, b) => a[sortBy].localeCompare(b[sortBy]),
        );
      }

      if (order === 'desc') {
        return copiedStudents.sort(
          (a, b) => b[sortBy].localeCompare(a[sortBy]),
        );
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        return copiedStudents.sort(
          (a, b) => a[sortBy] - b[sortBy],
        );
      }

      if (order === 'desc') {
        return copiedStudents.sort(
          (a, b) => b[sortBy] - a[sortBy],
        );
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        return copiedStudents.sort(
          (a, b) => +a[sortBy] - +b[sortBy],
        );
      }

      if (order === 'desc') {
        return copiedStudents.sort(
          (a, b) => +b[sortBy] - +a[sortBy],
        );
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        return copiedStudents.sort(
          (a, b) => averageGrade(a[sortBy]) - averageGrade(b[sortBy]),
        );
      }

      if (order === 'desc') {
        return copiedStudents.sort(
          (a, b) => averageGrade(b[sortBy]) - averageGrade(a[sortBy]),
        );
      }
      break;

    default:
      return copiedStudents;
  }

  return copiedStudents;
}
