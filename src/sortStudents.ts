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
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], field: SortField, order: SortOrder) {
  const sortType: string = typeof students[0][field];

  return [...students].sort((a, b) => {
    switch (sortType) {
      case 'string':
        return order === 'asc'
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
      case 'number':
        return order === 'asc'
          ? a[field] - b[field]
          : b[field] - a[field];
      case 'boolean':
        return order === 'asc'
          ? Number(a[field]) - Number(b[field])
          : Number(b[field]) - Number(a[field]);
      case 'object':
        return order === 'asc'
          ? calcAverageGrade(a[field]) - calcAverageGrade(b[field])
          : calcAverageGrade(b[field]) - calcAverageGrade(a[field]);
      default:
        return 0;
    };
  });
};

function calcAverageGrade(arr: number[]) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
