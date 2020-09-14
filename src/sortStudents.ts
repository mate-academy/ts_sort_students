'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

type student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}
export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type sortOrder = 'asc' | 'desc';

export function sortStudents(
  students: student[],
  sortBy: SortField,
  order: sortOrder
) {
  const copyStydent = [...students];

  copyStydent.sort((a, b) => {
    switch (sortBy) {
      case SortField.Name:
      case SortField.Surname:
        return order === 'asc' ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortField.Age:
        return order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
      case SortField.Married:
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        return a[sortBy] > b[sortBy] ? -1 : 1;
      case SortField.AverageGrade:
        const firstStudent = a[sortBy].reduce((sum = 0, item) => sum + item)
        / a[sortBy].length;
        const secondStudent = b[sortBy].reduce((sum = 0, item) => sum + item)
        / b[sortBy].length;

        return order === 'asc' ? firstStudent - secondStudent
          : secondStudent - firstStudent;
    }
  });

  return copyStydent;
}
