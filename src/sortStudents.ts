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
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder): Student[] {
  const resultArr = [...students];

  switch (sortBy) {
    case SortField.Name:
      resultArr.sort((a, b) =>
        (order === 'asc')
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
      break;
    case SortField.Surname:
      resultArr.sort((a, b) =>
        (order === 'asc')
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname)
      );
      break;
    case SortField.Age:
      resultArr.sort((a, b) =>
        (order === 'asc')
          ? a.age - b.age
          : b.age - a.age
      );
      break;
    case SortField.Married:
      resultArr.sort((a, b) =>
        (order === 'asc')
          ? +a.married - +b.married
          : +b.married - +a.married
      );
      break;
    case SortField.AverageGrade:
      resultArr.sort((a, b) => {
        const firstElem = a.grades.reduce((accumulator, currentValue) =>
          accumulator + currentValue) / a.grades.length;
        const secondElem = b.grades.reduce((accumulator, currentValue) =>
          accumulator + currentValue) / b.grades.length;

        return (order === 'asc')
          ? firstElem - secondElem
          : secondElem - firstElem;
      });
      break;
  }

  return resultArr;
}
