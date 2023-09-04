// import { types } from '@babel/core';

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(grades: number[]): number {
  return grades.reduce((accum: number, current: number) => accum + current, 0)
    / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const beginners: Student[] = [...students];

  return beginners.sort((beginnerA: Student, beginnerB: Student): number => {
    if (sortBy === SortType.Age) {
      return order === 'desc' ? beginnerB.age - beginnerA.age
        : beginnerB.age - beginnerA.age;
    }

    if (sortBy === SortType.Name) {
      return order === 'desc'
        ? (beginnerA.name.localeCompare(beginnerB.name) * -1)
        : beginnerA.name.localeCompare(beginnerB.name);
    }

    if (sortBy === SortType.Surname) {
      return order === 'desc'
        ? beginnerA.surname.localeCompare(beginnerB.surname)
        : beginnerB.surname.localeCompare(beginnerA.surname) * -1;
    }

    if (sortBy === SortType.Married) {
      return order === 'asc'
        ? Number(beginnerA.married) - Number(beginnerB.married)
        : Number(beginnerB.married) - Number(beginnerA.married);
    }

    if (sortBy === SortType.AverageGrade) {
      const averageGrades1: number = getAverageGrade(beginnerA.grades);
      const averageGrades2: number = getAverageGrade(beginnerB.grades);

      return order === 'desc'
        ? averageGrades2 - averageGrades1
        : averageGrades1 - averageGrades2;
    }

    return 0;
  });
}
