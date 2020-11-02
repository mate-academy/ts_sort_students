/* eslint-disable operator-linebreak */
'use strict';

interface Student {
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

type SortOrder = 'asc' | 'desc';

const sort = (
  a: { [key: string]: any },
  b: { [key: string]: any },
  sortField: string,
  order: string
): number => {
  const firstObj: { [key: string]: any } = order === 'asc' ? a : b;
  const secondObj: { [key: string]: any } = order === 'asc' ? b : a;

  if (typeof a[sortField] === 'number' || typeof a[sortField] === 'boolean') {
    return Number(firstObj[sortField]) - Number(secondObj[sortField]);
  }

  if (typeof a[sortField] === 'object') {
    const aAvarage =
      a[sortField].reduce((sum: number, cur: number) => sum + cur, 0) /
      a[sortField].length;
    const bAvarage =
      b[sortField].reduce((sum: number, cur: number) => sum + cur, 0) /
      b[sortField].length;

    return order === 'asc' ? aAvarage - bAvarage : bAvarage - aAvarage;
  }

  return Number(firstObj[sortField].localeCompare(secondObj[sortField]));
};

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder
): object[] {
  const studentsCopy = [...students];

  studentsCopy.sort((a, b) => sort(a, b, sortBy, order));

  return studentsCopy;
}
