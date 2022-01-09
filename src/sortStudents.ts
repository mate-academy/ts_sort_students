export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];

  averageGrade: number;
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function average(obj: Student): number {
  const resultAverage: number = obj.grades.reduce((a, b) => a + b)
  / obj.grades.length;

  return resultAverage;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  if (sortBy === SortType.Name && order === 'asc') {
    copyStudents.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === SortType.Name && order === 'desc') {
    copyStudents.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortBy === SortType.Surname && order === 'asc') {
    copyStudents.sort((a, b) => a.surname.localeCompare(b.surname));
  }

  if (sortBy === SortType.Surname && order === 'desc') {
    copyStudents.sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if (sortBy === SortType.Age && order === 'asc') {
    copyStudents.sort((a, b) => a.age - b.age);
  }

  if (sortBy === SortType.Age && order === 'desc') {
    copyStudents.sort((a, b) => b.age - a.age);
  }

  if (sortBy === SortType.Married && order === 'asc') {
    copyStudents.sort((a, b) => +a.married - +b.married);
  }

  if (sortBy === SortType.Married && order === 'desc') {
    copyStudents.sort((a, b) => +b.married - +a.married);
  }

  if (sortBy === SortType.AverageGrade && order === 'asc') {
    copyStudents.sort((a, b) => average(a) - average(b));
  }

  if (sortBy === SortType.AverageGrade && order === 'desc') {
    copyStudents.sort((a, b) => average(b) - average(a));
  }

  return copyStudents;
}
