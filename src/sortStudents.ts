'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
};

type SortOrder = 'asc' | 'desc';

const reducer = (
  accumulator: number,
  currentValue: number
) => accumulator + currentValue;

const getAverageGrade = (marks: number[]) => {
  return marks.reduce(reducer) / marks.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder): Student[] {
  const copy:Student[] = [...students];

  switch (sortBy) {
    case SortField.Name:
      return copy.sort((a, b) => {
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        };

        return b.name.localeCompare(a.name);
      });

    case SortField.Surname:
      return copy.sort((a, b) => {
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        };

        return b.surname.localeCompare(a.surname);
      });

    case SortField.Age:
      return copy.sort((a, b) => {
        if (order === 'asc') {
          return a.age - b.age;
        };

        return b.age - a.age;
      });

    case SortField.Married:
      return copy.sort((a, b) => {
        const aStr = a.married.toString();
        const bStr = b.married.toString();

        if (order === 'asc') {
          return aStr.localeCompare(bStr);
        };

        return bStr.localeCompare(aStr);
      });

    case SortField.AverageGrade:
      return copy.sort((a, b) => {
        const aAverageGrade = getAverageGrade(a.grades);
        const bAverageGrade = getAverageGrade(b.grades);

        if (order === 'asc') {
          return aAverageGrade - bAverageGrade;
        };

        return bAverageGrade - aAverageGrade;
      });
  };
};
