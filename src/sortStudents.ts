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

export type SortOrder = 'asc' | 'desc';

const getAverage: number = (grades: number[]) => grades
  .reduce((a, b) => a + b, 0) / grades.length;

export const sortStudents = (
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] => [...students].sort((prev, next) => {
  const valueA = sortBy === 'grades' ? getAverage(prev.grades) : prev[sortBy];
  const valueB = sortBy === 'grades' ? getAverage(next.grades) : next[sortBy];

  if (valueA > valueB) {
    return order === 'asc' ? 1 : -1;
  }

  if (valueA < valueB) {
    return order === 'desc' ? 1 : -1;
  }

  return 0;
});
