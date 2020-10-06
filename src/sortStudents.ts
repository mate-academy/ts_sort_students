/* eslint-disable max-len */
'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

export type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortField, order: SortOrder) {
  let sortedStudents: Student[];

  switch (sortBy) {
    case SortField.Name:
      sortedStudents = [...students].sort((a, b) => order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name));
      break;
    case SortField.Surname:
      sortedStudents = [...students].sort((a, b) => order === 'asc'
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname));
      break;
    case SortField.Age:
      sortedStudents = [...students].sort((a, b) => order === 'asc'
        ? a.age - b.age
        : b.age - a.age);
      break;
    case SortField.Married:
      sortedStudents = [...students].sort((a, b) => order === 'asc'
        ? Number(a.married) - Number(b.married)
        : Number(b.married) - Number(a.married));
      break;
    case SortField.AverageGrade:
      sortedStudents = [...students].sort((a, b) => order === 'asc'
        ? calcAverageGrade(a.grades) - calcAverageGrade(b.grades)
        : calcAverageGrade(b.grades) - calcAverageGrade(a.grades));
      break;
    default:
      return students;
  }

  return sortedStudents;
};

function calcAverageGrade(arr: number[]) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
