'use strict';

// describe Student type //
// create SortField enum and export it
// create SortOrder literal type

type Student = {
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

export function sortStudents(
  students: Student[], sortBy: SortField, order: SortOrder) : any {
  const temp = [...students];
  const bringToNumber = function(element: number[] | number | boolean): any {
    switch (typeof element) {
      case 'object': return element.reduce((a, b) => a + b) / element.length;
      case 'number': return element;
      case 'boolean': return +element;
    }
  };

  switch (order) {
    case 'asc':
      switch (sortBy) {
        case SortField.Name:
        case SortField.Surname:
          temp.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
          break;
        default: temp.sort((a, b) =>
          bringToNumber(a[sortBy]) - bringToNumber(b[sortBy]));
      } break;
    case 'desc':
      switch (sortBy) {
        case SortField.Name:
        case SortField.Surname:
          temp.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
          break;
        default: temp.sort((a, b) =>
          bringToNumber(b[sortBy]) - bringToNumber(a[sortBy]));
      } break;
  }

  return temp;
}
