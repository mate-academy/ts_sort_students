// import { verify } from 'crypto';
// import { type } from 'os';

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  avarageGrade?: number;
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

type Callback = (a: number, b: number) => number;

export function reducer(): Callback {
  return (a, b): number => a + b;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return studentA[sortBy].localeCompare(studentB[sortBy]);
        }

        if (order === 'desc') {
          return studentB[sortBy].localeCompare(studentA[sortBy]);
        }
        break;

      case SortType.Married:
      case SortType.Age:
        if (order === 'asc') {
          return Number(studentA[sortBy]) - Number(studentB[sortBy]);
        }

        if (order === 'desc') {
          return Number(studentB[sortBy]) - Number(studentA[sortBy]);
        }
        break;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return studentA[sortBy].reduce(reducer()) / studentA.grades.length
        - studentB[sortBy].reduce(reducer()) / studentB.grades.length;
        }

        if (order === 'desc') {
          return studentB[sortBy].reduce(reducer()) / studentB.grades.length
          - studentA[sortBy].reduce(reducer()) / studentA.grades.length;
        }

        break;

      default:
        throw new Error('Eror');
    }

    return 0;
  });
}
