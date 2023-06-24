
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
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];

  if (sortBy === SortType.Age && order === 'asc') {
    result.sort((a: Student, b: Student) => a.age - b.age);
  } else if (sortBy === SortType.Age && order === 'desc') {
    result.sort((a: Student, b: Student) => b.age - a.age);
  }

  if (sortBy === SortType.Name && order === 'asc') {
    result.sort((a: Student, b: Student) => a.name.localeCompare(b.name));
  } else if (sortBy === SortType.Name && order === 'desc') {
    result.sort((a: Student, b: Student) => b.name.localeCompare(a.name));
  }

  if (sortBy === SortType.Surname && order === 'asc') {
    result.sort((a: Student, b: Student) => a.surname.localeCompare(b.surname));
  } else if (sortBy === SortType.Surname && order === 'desc') {
    result.sort((a: Student, b: Student) => b.surname.localeCompare(a.surname));
  }

  if (sortBy === SortType.Married && order === 'asc') {
    result.sort((a: Student, b: Student) => +a.married - +b.married);
  } else if (sortBy === SortType.Married && order === 'desc') {
    result.sort((a: Student, b: Student) => +b.married - +a.married);
  }

  if (sortBy === SortType.AverageGrade && order === 'asc') {
    result.sort((a: Student, b: Student) => (
      a.grades.reduce((total, i) => total + i, 0) / a.grades.length)
    - (b.grades.reduce((total, i) => total + i, 0) / b.grades.length));
  } else if (sortBy === SortType.AverageGrade && order === 'desc') {
    result.sort((a: Student, b: Student) => (
      b.grades.reduce((total, i) => total + i, 0) / b.grades.length)
    - (a.grades.reduce((total, i) => total + i, 0) / a.grades.length));
  }

  return result;
}
