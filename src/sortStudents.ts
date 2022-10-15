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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result: Student[] = [...students];

  result.sort((a: Student, b: Student): number => {
    if (sortBy === 'name' || sortBy === 'surname') {
      if (order === 'desc') {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }

    if (sortBy === 'married') {
      if (order === 'desc') {
        return a[sortBy] <= b[sortBy] ? 1 : -1;
      }

      return a[sortBy] <= b[sortBy] ? -1 : 1;
    }

    if (sortBy === 'grades') {
      const first: number = a[sortBy]
        .reduce((x: number, y: number): number => x + y) / a[sortBy].length;
      const second: number = b[sortBy]
        .reduce((x: number, y: number): number => x + y) / b[sortBy].length;

      if (order === 'desc') {
        return second - first;
      }

      return first - second;
    }

    if (order === 'desc') {
      return b[sortBy] - a[sortBy];
    }

    return a[sortBy] - b[sortBy];
  });

  return result;
}
