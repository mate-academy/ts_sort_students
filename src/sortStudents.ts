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
}

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder): Student[] {
  // write your function

  const resultArr = [...students];

  switch (sortBy) {
    case SortField.Name:
      resultArr.sort((a, b) => {
        switch (order) {
          case 'asc':
            return a.name.localeCompare(b.name);
          default:
            return b.name.localeCompare(a.name);
        }
      });
      break;
    case SortField.Surname:
      resultArr.sort((a, b) => {
        switch (order) {
          case 'asc':
            return a.surname.localeCompare(b.surname);
          default:
            return b.surname.localeCompare(a.surname);
        }
      });
      break;
    case SortField.Age:
      resultArr.sort((a, b) => {
        switch (order) {
          case 'asc':
            return a.age - b.age;
          default:
            return b.age - a.age;
        }
      });
      break;
    case SortField.Married:
      resultArr.sort((a, b) => {
        switch (order) {
          case 'asc':
            return +a.married - +b.married;
          default:
            return +b.married - +a.married;
        }
      });
      break;
    case SortField.AverageGrade:
      resultArr.sort((a, b) => {
        const avGradeA = a.grades.reduce((accum, num) =>
          accum + num) / a.grades.length;
        const avGradeB = b.grades.reduce((accum, num) =>
          accum + num) / b.grades.length;

        switch (order) {
          case 'asc':
            return avGradeA - avGradeB;
          default:
            return avGradeB - avGradeA;
        }
      });
      break;
  }

  return resultArr;
}
