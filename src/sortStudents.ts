export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

const sumCallback = (current: number, prev: number): number => current + prev;

function sortCallback<T>(
  sortBy: SortType,
  order: SortOrder,
): (a: T, b: T) => number {
  return (a, b): number => {
    let current: T = a;
    let prev: T = b;

    if (order === 'desc') {
      [current, prev] = [b, a];
    }

    if (typeof current[sortBy] === 'string') {
      return current[sortBy].localeCompare(prev[sortBy]);
    }

    if (Array.isArray(current[sortBy])) {
      const sumA: number = current[sortBy].reduce(sumCallback, 0);
      const sumB: number = prev[sortBy].reduce(sumCallback, 0);

      return sumA / current[sortBy].length - sumB / prev[sortBy].length;
    }

    return current[sortBy] - prev[sortBy];
  };
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort(sortCallback<Student>(sortBy, order));
}
