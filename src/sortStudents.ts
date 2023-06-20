export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortGrades(
  array: Student[],
  order: SortOrder,
  field: 'grades',
): Student[] {
  function getAverageGrades(grades: number[]): number {
    return grades.reduce((a: number, b: number) => a + b, 0) / grades.length;
  }

  const copy = [...array];

  if (order === 'asc') {
    return copy
      .sort((s1: Student, s2: Student) => getAverageGrades(s1[field])
      - getAverageGrades(s2[field]));
  }

  return copy
    .sort((s1: Student, s2: Student) => getAverageGrades(s2[field])
    - getAverageGrades(s1[field]));
}

export function sortStrings(
  array: Student[],
  order: SortOrder,
  field: 'name' | 'surname',
): Student[] {
  const copy = [...array];

  if (order === 'asc') {
    return copy
      .sort((s1: Student, s2: Student) => s1[field].localeCompare(s2[field]));
  }

  return copy
    .sort((s1: Student, s2: Student) => s2[field].localeCompare(s1[field]));
}

export function sortNumbers(
  array: Student[],
  order: SortOrder,
  field: 'age' | 'married' | 'grades',
): Student[] {
  const copy = [...array];

  if (order === 'asc') {
    return copy
      .sort((s1: Student, s2: Student) => +s1[field] - +s2[field]);
  }

  return copy.sort((s1: Student, s2: Student) => +s2[field] - +s1[field]);
}

export function sortStudents(
  students: Student[],
  sortBy: keyof SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case 'name':
      return sortStrings(students, order, 'name');

    case 'surname':
      return sortStrings(students, order, 'surname');

    case 'age':
      return sortNumbers(students, order, 'age');

    case 'married':
      return sortNumbers(students, order, 'married');

    case 'grades':
      return sortGrades(students, order, 'grades');

    default:
      return students;
  }
}
