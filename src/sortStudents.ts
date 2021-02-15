'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[], sortBy:SortField, order:SortOrder): any {
  const result = [...students];

  switch (sortBy) {
    case SortField.Name:
      (order === 'asc')
        ? result.sort((a:Student, b:Student) => a.name.localeCompare(b.name))
        : result.sort((a:Student, b:Student) => b.name.localeCompare(a.name));
      break;
    case SortField.Surname:
      (order === 'asc')
        ? result.sort((a: Student, b:Student) =>
          a.surname.localeCompare(b.surname))
        : result.sort((a: Student, b:Student) =>
          b.surname.localeCompare(a.surname));
      break;
    case SortField.Age:
      (order === 'asc')
        ? result.sort((a:Student, b:Student) => a.age - b.age)
        : result.sort((a:Student, b:Student) => b.age - a.age);
      break;
    case SortField.Married:
      (order === 'asc')
        ? result.sort((a:Student, b:Student) => +a.married - +b.married)
        : result.sort((a:Student, b:Student) => +b.married - +a.married);
      break;
    case SortField.AverageGrade:
      (order === 'asc')
        ? result.sort((a:Student, b:Student) =>
          (a.grades.reduce((acc: number, curr: number) =>
            acc + curr) / a.grades.length)
        - (b.grades.reduce((acc: number, curr: number) =>
          acc + curr) / b.grades.length))
        : result.sort((a:Student, b:Student) =>
          (b.grades.reduce((acc: number, curr: number) =>
            acc + curr) / b.grades.length)
        - (a.grades.reduce((acc: number, curr: number) =>
          acc + curr) / a.grades.length));
  }

  return result;
}
