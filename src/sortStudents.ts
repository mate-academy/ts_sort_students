
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export type Comparison = (
  start: Student,
  end: Student,
  sortBy: SortType) => number;

export type SortStudents = (
  students: Student[],
  sortBy: SortType,
  order: SortOrder) => Student[];

export function getAverageGrades(student: Student): number {
  const sumStart = student.grades.reduce((sum: number, n: number) => sum + n);

  return sumStart / student.grades.length;
}

export const comparison: Comparison = (start, end, sortBy) => {
  if (sortBy === 'age') {
    return start[sortBy] - end[sortBy];
  }

  if (sortBy === 'averageGrade') {
    return getAverageGrades(start) - getAverageGrades(end);
  }

  if (sortBy === 'married') {
    return (start[sortBy] ? 1 : 0) - (end[sortBy] ? 1 : 0);
  }

  return start[sortBy].localeCompare(end[sortBy]);
};

export const sortStudents: SortStudents = (students, sortBy, order) => {
  const copyStudents = [...students];

  return copyStudents.sort((a: Student, b: Student): number => {
    return (order === 'asc')
      ? comparison(a, b, sortBy)
      : comparison(b, a, sortBy);
  });
};
