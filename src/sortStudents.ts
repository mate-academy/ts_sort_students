
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

function averageGrade(grades: number []): number {
  const sum = grades.reduce((acc, current) => acc + current, 0);

  return sum / grades.length;
}

function compare(
  studentA: Student,
  studentB: Student,
  sort: SortType,
  order: SortOrder,
): number {
  const getValue = (student: Student): string | number | boolean => {
    return sort === SortType.AverageGrade
      ? averageGrade(student.grades)
      : student[sort];
  };

  const valueB = getValue(studentB);
  const valueA = getValue(studentA);

  if (typeof valueA === 'string' && typeof valueB === 'string') {
    return order === 'asc'
      ? valueA.localeCompare(valueB)
      : valueB.localeCompare(valueA);
  }

  return order === 'asc'
    ? Number(valueA) - Number(valueB)
    : Number(valueB) - Number(valueA);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order : SortOrder,
): Student[] {
  return [...students].sort((a, b) => compare(a, b, sortBy, order));
}
