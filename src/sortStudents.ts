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
};

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
};

export type Order = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: Order): Student[] {
  const studentsCopy = [...students];

  return studentsCopy.sort((a, b) => {
    switch (sortBy) {
      case SortField.Name:
      case SortField.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortField.Age:
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      case SortField.Married:
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        return a[sortBy] > b[sortBy]
          ? -1
          : 1;
      case SortField.AverageGrade:
        const currentStudent = a[sortBy]
          .reduce((acc, grade) => acc + grade) / a[sortBy].length;
        const nextStudent = b[sortBy]
          .reduce((acc, grade) => acc + grade) / b[sortBy].length;

        return order === 'asc'
          ? currentStudent - nextStudent
          : nextStudent - currentStudent;
    }
  });
}
