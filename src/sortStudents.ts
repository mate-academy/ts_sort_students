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
}

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

type SortOrder = 'asc' | 'desc';

const getAverage = (numbers: number[]) => {
  return numbers
    .reduce((acc: number, value: number) => (acc + value)) / numbers.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder,
) {
  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortField.Married:
        return order === 'asc'
          ? a[sortBy] === b[sortBy] ? 0 : a[sortBy] ? 1 : -1
          : a[sortBy] === b[sortBy] ? 0 : a[sortBy] ? -1 : 1;

      case SortField.Surname:
      case SortField.Name:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortField.AverageGrade:
        return order === 'asc'
          ? getAverage(a[sortBy]) - getAverage(b[sortBy])
          : getAverage(b[sortBy]) - getAverage(a[sortBy]);

      default:
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
    }
  });
}
