'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

export type User = {
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

export type Order = 'asc' | 'desc';

export function sortStudents(students: User[], sortBy: SortField, order: Order): User[] {
  return [...students].sort((a, b) => {
    const aField: any = a[sortBy];
    const bField: any = b[sortBy];

    switch (typeof students[0][sortBy]) {
      case 'string':
        return order === 'asc'
          ? aField.localeCompare(bField)
          : bField.localeCompare(aField);

      case 'number':
      case 'boolean':
        return order === 'asc'
          ? aField - bField
          : bField - aField;

      case 'object':
        return order === 'asc'
          ? getAverage(aField) - getAverage(bField)
          : getAverage(bField) - getAverage(aField);
    }
  });
}

function getAverage(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num) / arr.length;
}
