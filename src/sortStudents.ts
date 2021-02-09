'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

type StudentType = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}[];

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  studentsList: StudentType,
  sortBy: SortField,
  order: SortOrder
) {
  const studentsCopy = [...studentsList];
  const sortOrder = (order === 'asc') ? [1, -1] : [-1, 1];

  if (sortBy === 'name' || sortBy === 'surname') {
    studentsCopy.sort(
      (prev, next) => (
        prev[sortBy].toLowerCase() > next[sortBy].toLowerCase()
      ) ? sortOrder[0] : sortOrder[1]
    );
  }

  if (sortBy === 'age') {
    studentsCopy.sort(
      (prev, next) => (
        prev.age > next.age
      ) ? sortOrder[0] : sortOrder[1]
    );
  }

  if (sortBy === 'married') {
    studentsCopy.sort(
      (prev, next) => (
        Number(next.married) - Number(prev.married)
      )
    );
  }

  if (sortBy === 'grades') {
    studentsCopy.sort(
      (prev, next) => {
        const prevAverage = prev.grades.reduce(
          (sum, x) => sum + x, 0
        ) / prev.grades.length;

        const nextAverage = next.grades.reduce(
          (sum, x) => sum + x, 0
        ) / next.grades.length;

        return (prevAverage - nextAverage) * sortOrder[0];
      }
    );
  }

  return studentsCopy;
}
