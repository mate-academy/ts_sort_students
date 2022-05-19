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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desk';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((accum, grade) => accum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = students.slice();

  if (sortBy === 'name' || sortBy === 'surname') {
    return order === 'asc'
      ? studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
      : studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }

  if (sortBy === 'grades') {
    return order === 'asc'
      ? studentsCopy.sort((a, b) => getAverageGrade(a[sortBy])
      - getAverageGrade(b[sortBy]))
      : studentsCopy.sort((a, b) => getAverageGrade(b[sortBy])
      - getAverageGrade(a[sortBy]));
  }

  return order === 'asc'
    ? studentsCopy.sort((a, b) => +a[sortBy] - +b[sortBy])
    : studentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy]);
}
