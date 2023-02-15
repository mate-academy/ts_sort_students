export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  [key: string]: string | number | boolean | number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

const average: number = (grades: number[]) => grades.reduce((a, b) => a + b, 0)
  / grades.length;

export const sortStudents = (
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] => [...students].sort((a, b) => {
  const field = sortBy === SortType.AverageGrade
    ? 'grades' : sortBy.toLowerCase();
  const valueA = field === 'grades' ? average(a.grades) : a[field];
  const valueB = field === 'grades' ? average(b.grades) : b[field];

  if (valueA > valueB) {
    return order === 'asc' ? 1 : -1;
  }

  if (valueA < valueB) {
    return order === 'desc' ? 1 : -1;
  }

  return 0;
});
