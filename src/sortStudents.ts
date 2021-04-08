'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
};

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: 'asc' | 'desc'
) {
  const result: Student[] = [...students];

  switch (sortBy) {
    case SortField.Name:
      result.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.name > b.name ? 1 : -1;
        } else {
          return a.name > b.name ? -1 : 1;
        }
      });
      break;

    case SortField.Surname:
      result.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.surname > b.surname ? 1 : -1;
        } else {
          return a.surname > b.surname ? -1 : 1;
        }
      });
      break;

    case SortField.Age:
      result.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.age - b.age;
        } else {
          return b.age - a.age;
        }
      });
      break;

    case SortField.Married:
      result.sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.married && !b.married ? 1 : -1;
        } else {
          return a.married && !b.married ? -1 : 1;
        }
      });
      break;

    case SortField.AverageGrade:
      result.sort((a: Student, b: Student) => {
        const averageA: number = a.grades.reduce(
          (sum: number, el: number) => sum + el, 0
        ) / a.grades.length;

        const averageB: number = b.grades.reduce(
          (sum: number, el: number) => sum + el, 0
        ) / b.grades.length;

        return order === 'asc'
          ? averageA - averageB
          : averageB - averageA;
      });
      break;
  }

  return result;
}
