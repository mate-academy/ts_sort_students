export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverage(array: number[]): number {
  return array.reduce((x: number, y: number): number => x + y) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'desc') {
          return b[sortBy].localeCompare(a[sortBy]);
        }

        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Surname:
        if (order === 'desc') {
          return b[sortBy].localeCompare(a[sortBy]);
        }

        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Married:
        if (order === 'desc') {
          return a[sortBy] <= b[sortBy] ? 1 : -1;
        }

        return a[sortBy] <= b[sortBy] ? -1 : 1;

      case SortType.Age:
        if (order === 'desc') {
          return b[sortBy] - a[sortBy];
        }

        return a[sortBy] - b[sortBy];

      case SortType.AverageGrade:
        if (order === 'desc') {
          return getAverage(b[sortBy]) - getAverage(a[sortBy]);
        }

        return getAverage(a[sortBy]) - getAverage(b[sortBy]);

      default:
        return 0;
    }
  });
}
