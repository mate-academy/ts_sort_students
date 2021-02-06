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

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder,
): Student[] {
  let sortedStudents: Student[];

  if (order === 'asc') {
    switch (sortBy) {
      case SortField.Name:
      case SortField.Surname:
        sortedStudents = [...students].sort(
          (a, b) => a[sortBy].localeCompare(b[sortBy]));
        break;
      case SortField.Age:
      case SortField.Married:
        sortedStudents = [...students].sort(
          (a, b) => Number(a[sortBy]) - Number(b[sortBy]));
        break;
      default:
        sortedStudents = [...students].sort(
          (a, b) => a[sortBy].reduce(
            (acc, item) => acc + item
          ) / a[sortBy].length - b[sortBy].reduce(
            (acc, item) => acc + item
          ) / b[sortBy].length
        );
        break;
    }
  } else {
    switch (sortBy) {
      case SortField.Name:
      case SortField.Surname:
        sortedStudents = [...students].sort(
          (a, b) => b[sortBy].localeCompare(a[sortBy])
        );
        break;
      case SortField.Age:
      case SortField.Married:
        sortedStudents = [...students].sort(
          (a, b) => Number(b[sortBy]) - Number(a[sortBy])
        );
        break;
      default:
        sortedStudents = [...students].sort(
          (a, b) => (
            b[sortBy].reduce(
              (acc, item) => acc + item
            ) / b[sortBy].length - a[sortBy].reduce(
              (acc, item) => acc + item
            ) / a[sortBy].length
          ));
        break;
    }
  }

  return sortedStudents;
}
