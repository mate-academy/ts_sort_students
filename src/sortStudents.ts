
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

// return the average grade of a student
function averageGrade(student: Student): number {
  return student.grades.reduce((a, b) => a + b) / student.grades.length || 1;
}

// default compare for three basic types
function defaultCompare(
  st1: string | number | boolean,
  st2: string | number | boolean,
  order: SortOrder,
): number {
  if (st1 > st2) {
    return order === 'asc'
      ? 1
      : -1;
  }

  if (st1 < st2) {
    return order === 'asc'
      ? -1
      : 1;
  }

  return 0;
}

export function sortStudents(
  students: Student[],
  sortBy: string,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.AverageGrade:
      return [...students].sort((st1, st2) => (order === 'asc'
        ? averageGrade(st1) - averageGrade(st2)
        : averageGrade(st2) - averageGrade(st1)));
    default:
      return [...students]
        .sort((st1, st2) => defaultCompare(st1[sortBy], st2[sortBy], order));
  }
}
