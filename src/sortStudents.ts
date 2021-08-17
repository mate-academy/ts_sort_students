'use strict';
// import { type } from "os";

// describe Student type
// create SortField enum and export it
// create SortOrder literal type

type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades:number[];
}

export enum SortField {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortField, order: SortOrder) {
  switch (order) {
    case 'asc':
      switch (sortBy) {
        case SortField.Name:
          return [...students].sort((a, b) =>
            a.name.localeCompare(b.name));

        case SortField.Surname:
          return [...students].sort((a, b) =>
            a.surname.localeCompare(b.surname));

        case SortField.Age:
          return [...students].sort((a, b) =>
            a.age - b.age);

        case SortField.Married:
          return [...students].sort((a, b) =>
            `${a.married}`.localeCompare(`${b.married}`));

        case SortField.AverageGrade:
          const callback = (sum: number, x: number) => sum + x;

          return [...students].sort((a, b) => {
            const aAver = [...a.grades].reduce(callback, 0) / a.grades.length;
            const bAver = [...b.grades].reduce(callback, 0) / b.grades.length;

            return aAver - bAver;
          });
      }
      break;

    case 'desc':
      switch (sortBy) {
        case SortField.Name:
          return [...students].sort((a, b) => b.name.localeCompare(a.name));

        case SortField.Surname:
          return [...students].sort((a, b) =>
            b.surname.localeCompare(a.surname));

        case SortField.Age:
          return [...students].sort((a, b) =>
            b.age - a.age);

        case SortField.Married:
          return [...students].sort((a, b) =>
            `${b.married}`.localeCompare(`${a.married}`));

        case SortField.AverageGrade:
          const callback = (sum: number, x: number) => sum + x;

          return [...students].sort((a, b) => {
            const aAver = [...a.grades].reduce(callback, 0) / a.grades.length;
            const bAver = [...b.grades].reduce(callback, 0) / b.grades.length;

            return bAver - aAver;
          });
      }
      break;
  }
}
