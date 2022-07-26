
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

/* eslint-disable max-len */
export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): object[] {
  const studentsCopy = students.map((student) => ({ ...student }));

  if (sortBy === SortType.Name && order === 'asc') {
    return studentsCopy.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === SortType.Name && order === 'desc') {
    return studentsCopy.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortBy === SortType.Surname && order === 'asc') {
    return studentsCopy.sort((a, b) => a.surname.localeCompare(b.surname));
  }

  if (sortBy === SortType.Surname && order === 'desc') {
    return studentsCopy.sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if (sortBy === SortType.Age && order === 'asc') {
    return studentsCopy.sort((a, b) => a.age - b.age);
  }

  if (sortBy === SortType.Age && order === 'desc') {
    return studentsCopy.sort((a, b) => b.age - a.age);
  }

  if (sortBy === SortType.Married && order === 'asc') {
    return studentsCopy.sort((a, b) => Number(a.married) - Number(b.married));
  }

  if (sortBy === SortType.Married && order === 'desc') {
    return studentsCopy.sort((a, b) => Number(b.married) - Number(a.married));
  }

  if (sortBy === SortType.AverageGrade && order === 'asc') {
    return studentsCopy
      .sort((a, b) => (a.grades.reduce((x, y) => x + y) / a.grades.length) - (b.grades.reduce((x, y) => x + y) / b.grades.length));
  }

  if (sortBy === SortType.AverageGrade && order === 'desc') {
    return studentsCopy
      .sort((a, b) => (b.grades.reduce((x, y) => x + y) / b.grades.length) - (a.grades.reduce((x, y) => x + y) / a.grades.length));
  }

  return studentsCopy;
}
