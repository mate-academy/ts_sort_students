'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((gr1, gr2) => gr1 + gr2) / grades.length;
}

function compareStrings(stringA: string, stringB: string): number {
  return stringA.localeCompare(stringB);
}

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder): Student[] {
  const output: Student[] = [...students];

  output.sort((a: Student, b: Student) => {
    let result: number;

    switch (sortBy) {
      case SortField.Name:
        result = compareStrings(a.name, b.name);
        break;
      case SortField.Surname:
        result = compareStrings(a.surname, b.surname);
        break;
      case SortField.Age:
        result = a.age - b.age;
        break;
      case SortField.Married:
        result = a.married && !b.married ? 1 : -1;
        break;
      case SortField.AverageGrade:
        const avgGradeA = getAverageGrade(a.grades);
        const avgGradeB = getAverageGrade(b.grades);

        result = avgGradeA - avgGradeB;
    }

    return order === 'asc' ? result : result * (-1);
  });

  return output;
}
