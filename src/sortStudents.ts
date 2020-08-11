'use strict';

type Student = {
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
}

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
        return order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
      case SortField.AverageGrade:
        const firstValue
        = a[sortBy].reduce((acc, curr) => acc + curr) / a[sortBy].length;
        const secondValue
        = b[sortBy].reduce((acc, curr) => acc + curr) / b[sortBy].length;

        return order === 'asc'
          ? firstValue - secondValue
          : secondValue - firstValue;
    }
    // Married case

    if (a[sortBy] === b[sortBy]) {
      return 0;
    }

    return a[sortBy] > b[sortBy] ? -1 : 1;
  });

  return studentsCopy;
}
