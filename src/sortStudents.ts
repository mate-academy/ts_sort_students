'use strict';

// describe Student type
// create SortField enum and export it
// create SortOrder literal type
type gradesArray = number;

type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: gradesArray[];
}

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
};

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder
) {
  const studentsCopy = [...students];

  studentsCopy.sort((a, b) => {
    switch (sortBy) {
      case SortField.Name:
      case SortField.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortField.Age:
        return order === 'asc'
          ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
      case SortField.AverageGrade:
        const first = a[sortBy].reduce((accumulator, current) =>
          accumulator + current) / a[sortBy].length;
        const second = b[sortBy].reduce((accumulator, current) =>
          accumulator + current) / b[sortBy].length;

        return order === 'asc'
          ? first - second
          : second - first;
    }

    return a[sortBy] > b[sortBy] ? -1 : 1;
  });

  return studentsCopy;
};
