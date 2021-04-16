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
};

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: 'asc' | 'desc'
) {
  const result = [...students];

  const calcGrade = (arr: number[]) => arr.reduce((a, b) => a + b) / arr.length;

  return result.sort((a: Student, b: Student): any => {
    switch (sortBy) {
      case SortField.Name:
      case SortField.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortField.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case SortField.Married:
        return order === 'asc'
          ? a.married && !b.married ? 1 : -1
          : a.married && !b.married ? -1 : 1;

      case SortField.AverageGrade:
        return order === 'asc'
          ? calcGrade(a.grades) - calcGrade(b.grades)
          : calcGrade(b.grades) - calcGrade(a.grades);
    }
  });
}
