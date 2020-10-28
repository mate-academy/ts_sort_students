'use strict';
// describe Student type
type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
};

// create SortField enum and export it
export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder literal type
type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder
) {
  const result = [...students];

  result.sort((a, b) => {
    if (sortBy === SortField.Name || sortBy === SortField.Surname) {
      return order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]);
    } else if (sortBy === SortField.Age) {
      return order === 'asc'
        ? a[sortBy] - b[sortBy]
        : b[sortBy] - a[sortBy];
    } else if (sortBy === SortField.AverageGrade) {
      const left
      = a[sortBy].reduce((sum, current) => sum + current) / a[sortBy].length;
      const right
      = b[sortBy].reduce((sum, current) => sum + current) / b[sortBy].length;

      return order === 'asc'
        ? left - right
        : right - left;
    } else {
      if (a[sortBy] === b[sortBy]) {
        return 0;
      }

      return a[sortBy] > b[sortBy] ? -1 : 1;
    }
  });

  return result;
}
