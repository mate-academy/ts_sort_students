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
  const countAverage = function(array: number[]): number {
    return array.reduce((a, b) => a + b) / array.length;
  };

  switch (order) {
    case 'asc':
      switch (sortBy) {
        case SortField.Name: case SortField.Surname:
          temp.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
          break;
        case SortField.Married: temp.sort((a, b) => +a[sortBy] - +b[sortBy]);
          break;
        case SortField.Age: temp.sort((a, b) => a[sortBy] - b[sortBy]);
          break;
        case SortField.AverageGrade: temp.sort((a, b) =>
          countAverage(a[sortBy]) - countAverage(b[sortBy])
        ); break;
      } break;
    case 'desc':
      switch (sortBy) {
        case SortField.Name: case SortField.Surname:
          temp.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
          break;
        case SortField.Married: temp.sort((a, b) => +b[sortBy] - +a[sortBy]);
          break;
        case SortField.Age: temp.sort((a, b) => b[sortBy] - a[sortBy]);
          break;
        case SortField.AverageGrade: temp.sort((a, b) =>
          countAverage(b[sortBy]) - countAverage(a[sortBy])
        ); break;
      } break;
  }

  return temp;
}
