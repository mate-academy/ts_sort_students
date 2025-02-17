/* eslint-disable @typescript-eslint/no-unused-vars */
import { stat } from 'fs';
import { isFunctionLike } from 'typescript';

export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  // write your function

  const sortArrayOfStudents: Student[] = [...students];

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    if (order === 'asc') {
      sortArrayOfStudents.sort(
        (a: Student, b: Student) => a.name.localeCompare(b.name)
        || a.surname.localeCompare(b.surname),
      );
    } else {
      sortArrayOfStudents.sort(
        (a: Student, b: Student) => b.name.localeCompare(a.name)
        || b.surname.localeCompare(a.surname),
      );
    }
  }

  if (sortBy === SortType.Surname) {
    if (order === 'asc') {
      sortArrayOfStudents.sort(
        (a: Student, b: Student) => a.surname.localeCompare(b.surname),
      );
    } else {
      sortArrayOfStudents.sort(
        (a: Student, b: Student) => b.surname.localeCompare(a.surname),
      );
    }
  }

  if (sortBy === SortType.Age) {
    if (order === 'asc') {
      sortArrayOfStudents.sort((a: Student, b: Student) => a.age - b.age);
    } else {
      sortArrayOfStudents.sort((a: Student, b: Student) => b.age - a.age);
    }
  }

  if (sortBy === SortType.Married) {
    sortArrayOfStudents.sort((a: Student, b: Student) => {
      if (a.married === b.married) {
        return 0;
      }

      if (order === 'asc') {
        return a.married ? 1 : -1;
      }

      return a.married ? -1 : 1;
    });
  }

  function gradesSort(gradesArray: number[]): number {
    const averageGrade: number = (gradesArray.reduce(
      (sum, n) => sum + n, 0,
    )) / gradesArray.length;

    return averageGrade;
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      sortArrayOfStudents.sort(
        (a: Student, b: Student) => gradesSort(a.grades) - gradesSort(b.grades),
      );
    } else {
      sortArrayOfStudents.sort(
        (a: Student, b: Student) => gradesSort(b.grades) - gradesSort(a.grades),
      );
    }
  }

  return sortArrayOfStudents;
}
