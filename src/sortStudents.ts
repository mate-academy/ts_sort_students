'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

interface IStudent {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade = 'AverageGrade'
}

type SortOrderType = 'asc' | 'desc';

export function sortStudents(
  students: IStudent[],
  sortBy: SortField,
  order: SortOrderType
): IStudent[] {
  let sortedStudents = [];

  switch (sortBy) {
    case SortField.Name:
      sortedStudents = students.sort((studentA, studentB) => {
        if (order === 'asc') {
          return studentA.name.localeCompare(studentB.name);
        } else {
          return studentB.name.localeCompare(studentA.name);
        }
      });

      break;

    case SortField.Surname:
      sortedStudents = students.sort((studentA, studentB) => {
        if (order === 'asc') {
          return studentA.surname.localeCompare(studentB.surname);
        }

        return studentB.surname.localeCompare(studentA.surname);
      });

      break;

    case SortField.Age:
      sortedStudents = students.sort((studentA, studentB) => {
        if (order === 'desc') {
          return studentB.age - studentA.age;
        } else {
          return studentA.age - studentB.age;
        }
      });

      // eslint-disable-next-line no-console
      console.log('age sorted: ', sortedStudents);
      break;

    case SortField.Married:
      sortedStudents = students.sort((studentA, studentB) => {
        if (order === 'desc') {
          return (studentA.married === studentB.married)
            ? 0 : studentA.married
              ? -1 : 1;
        }

        return (studentA.married === studentB.married)
          ? 0 : studentA.married
            ? 1 : -1;
      });

      // eslint-disable-next-line no-console
      console.log('married sorted: ', sortedStudents);
      break;

    case SortField.AverageGrade:
      sortedStudents = students.sort((studentA, studentB) => {
        const firstSumOfGrades = studentA.grades.reduce((acc, curr) => (
          acc + curr
        ), 0) / studentA.grades.length;

        const secondSumOfGrades = studentB.grades.reduce((acc, curr) => (
          acc + curr
        ), 0) / studentB.grades.length;

        if (order === 'desc') {
          return secondSumOfGrades - firstSumOfGrades;
        }

        return firstSumOfGrades - secondSumOfGrades;
      });

      break;
  }

  return sortedStudents;
}
