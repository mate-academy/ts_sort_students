
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const arr: Student[] = students.slice();

  if (sortBy === 'name' || sortBy === 'surname') {
    return order === 'asc'
      ? arr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
      : arr.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }

  if (sortBy === 'age' || sortBy === 'married') {
    return order === 'asc'
      ? arr.sort((a, b) => +a[sortBy] - +b[sortBy])
      : arr.sort((a, b) => +b[sortBy] - +a[sortBy]);
  }

  function average(array: number[]): number {
    return array.reduce((a, b) => a + b) / array.length;
  }

  if (sortBy === 'grades') {
    return order === 'asc'
      ? arr.sort((a, b) => average(a.grades) - average(b.grades))
      : arr.sort((a, b) => average(b.grades) - average(a.grades));
  }

  return arr;
}
