'use strict';

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

type SortOrder = 'asc' | 'desc'

export function sortStudents(students: Student[],
  sortBy: SortField, order: SortOrder): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortField.Name:
      return copyStudents.sort((a: Student, b: Student) =>
        order === 'asc'
          ? a[SortField.Name].localeCompare(b[SortField.Name])
          : b[SortField.Name].localeCompare(a[SortField.Name])
      );
    case SortField.Surname:
      return copyStudents.sort((a: Student, b: Student) =>
        order === 'asc'
          ? a[SortField.Surname].localeCompare(b[SortField.Surname])
          : b[SortField.Surname].localeCompare(a[SortField.Surname])
      );
    case SortField.Age:
      return copyStudents.sort((a: Student, b: Student) =>
        order === 'asc'
          ? a[SortField.Age] - b[SortField.Age]
          : b[SortField.Age] - a[SortField.Age]
      );
    case SortField.Married:
      return copyStudents.sort((a: Student, b: Student) =>
        order === 'asc'
          ? Number(a[SortField.Married]) - Number(b[SortField.Married])
          : Number(b[SortField.Married]) - Number(a[SortField.Married])
      );
    case SortField.AverageGrade:
      return copyStudents.sort(function(a: Student, b: Student) {
        const first = (a[SortField.AverageGrade].reduce(
          (acc:number, current:number) =>
            acc + current)) / a[SortField.AverageGrade].length;
        const second = (b[SortField.AverageGrade].reduce(
          (acc:number, current:number) =>
            acc + current)) / b[SortField.AverageGrade].length;

        return order === 'asc'
          ? first - second
          : second - first;
      });
  }
}
