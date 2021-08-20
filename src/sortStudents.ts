'use strict';
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
  switch (sortBy) {
    case SortField.Name:
      return [...students].sort((a, b) => order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name));

    case SortField.Surname:
      return [...students].sort((a, b) => order === 'asc'
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname));

    case SortField.Age:
      return [...students].sort((a, b) => order === 'asc'
        ? a.age - b.age
        : b.age - a.age);

    case SortField.Married:
      return [...students].sort((a, b) => order === 'asc'
        ? `${a.married}`.localeCompare(`${b.married}`)
        : `${b.married}`.localeCompare(`${a.married}`));

    case SortField.AverageGrade:
      const callback = (sum: number, x: number) => sum + x;

      return [...students].sort((a, b) => {
        const aAver = [...a.grades].reduce(callback, 0) / a.grades.length;
        const bAver = [...b.grades].reduce(callback, 0) / b.grades.length;

        return order === 'asc'
          ? aAver - bAver
          : bAver - aAver;
      });
  }
}
