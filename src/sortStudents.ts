/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */

export interface Student {
  name: string;
  surname: string;
  age: number;
  married:boolean;
  grades: number [];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
): Student[] {
  function getAverageGrade(value: number[]): number {
    return value
      .reduce((sum: number, x: number): number => sum + x) / value.length;
  }

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    if (order === 'asc') {
      return [...students]
        .sort((a:Student, b:Student) => a[sortBy]
          .localeCompare(b[sortBy]));
    }

    if (order === 'desc') {
      return [...students]
        .sort((a:Student, b:Student) => b[sortBy]
          .localeCompare(a[sortBy]));
    }
  }

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    if (order === 'asc') {
      return [...students]
        .sort((a: Student, b: Student) => a[sortBy] - b[sortBy]);
    }

    if (order === 'desc') {
      return [...students]
        .sort((a:Student, b:Student) => b[sortBy] - a[sortBy]);
    }
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      return [...students]
        .sort((a: Student, b: Student) => getAverageGrade(a[sortBy])
          - getAverageGrade(b[sortBy]));
    }

    if (order === 'desc') {
      return [...students]
        .sort((a: Student, b: Student) => getAverageGrade(b[sortBy])
          - getAverageGrade(a[sortBy]));
    }
  }
}
