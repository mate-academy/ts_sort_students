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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function averageGradeFind(grades: number[]): number {
    return grades.reduce(
      (accum: number, item: number): number => accum + item,
    ) / grades.length;
  }

  if (sortBy === SortType.AverageGrade) {
    return students.sort((a, b) => (order === 'asc'
      ? averageGradeFind(a.grades) - averageGradeFind(b.grades)
      : averageGradeFind(b.grades) - averageGradeFind(a.grades)));
  }

  type Simple = number | string | boolean;

  function compare(a: Simple, b: Simple): number {
    if (a > b) {
      return 1;
    }

    return a === b ? 0 : -1;
  }

  return [...students].sort((a, b) => (order === 'asc'
    ? compare(a[sortBy], b[sortBy])
    : compare(b[sortBy], a[sortBy])));
}
