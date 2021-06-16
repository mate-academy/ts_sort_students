'use strict';

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
};

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder): Student[] {
  const clone = Object.values(students);

  switch (sortBy) {
    case SortField.Name:
      clone.sort((a, b) => sortAll(a.name, b.name, order));
      break;

    case SortField.Surname:
      clone.sort((a, b) => sortAll(a.surname, b.surname, order));
      break;

    case SortField.Age:
      clone.sort((a, b) => sortAll(a.age, b.age, order));
      break;

    case SortField.Married:
      clone.sort((a, b) => sortAll(a.married, b.married, order));
      break;

    case SortField.AverageGrade:
      clone.sort((a, b) =>
        sortAll(average(a.grades), average(b.grades), order));
  };

  return clone;
}

function average(arr: number[]): number {
  return arr.reduce((a, b) => a + b) / arr.length;
}

type Sort = string | number | boolean;

function sortAll(a: Sort, b: Sort, typeSort: SortOrder): number {
  if (typeof a === 'number' && typeof b === 'number') {
    if (typeSort === 'asc') {
      return a - b;
    } else {
      return b - a;
    }
  } else {
    if (typeSort === 'asc') {
      return `${a}`.localeCompare(`${b}`);
    } else {
      return `${b}`.localeCompare(`${a}`);
    }
  }
}
