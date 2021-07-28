'use strict';
// describe Student type
type Student = {
  name:string,
  surname:string,
  age:number,
  married:boolean,
  grades:number[],
}
// create SortField enum and export it
export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}
// create SortOrder literal type
type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[], sortBy:SortField, order:SortOrder
) {
  const studentsArray = [...students];

  function compareNumeric(a:number, b:number) {
    return a - b;
  }

  function compareString(a:string | boolean, b:string | boolean) {
    if (a > b) {
      return 1;
    };

    if (a < b) {
      return -1;
    };

    return 0;
  }

  switch (sortBy) {
    case SortField.Name:
      studentsArray.sort((a, b) => {
        switch (order) {
          case 'asc':
            return compareString(a.name, b.name);

          case 'desc':
            return compareString(b.name, a.name);
        }
      });
      break;
    case SortField.Surname:
      studentsArray.sort((a, b) => {
        switch (order) {
          case 'asc':
            return compareString(a.surname, b.surname);

          case 'desc':
            return compareString(b.surname, a.surname);
        }
      });
      break;
    case SortField.Married:
      studentsArray.sort((a, b) => {
        switch (order) {
          case 'asc':
            return compareString(a.married, b.married);

          case 'desc':
            return compareString(b.married, a.married);
        }
      });
      break;
    case SortField.Age:
      studentsArray.sort((a, b) => {
        switch (order) {
          case 'asc':
            return compareNumeric(a.age, b.age);

          case 'desc':
            return compareNumeric(b.age, a.age);
        }
      });
      break;
    case SortField.AverageGrade:
      studentsArray.sort((a, b) => {
        const averageA = a.grades.reduce((sum, next) => sum + next, 0)
        / a.grades.length;
        const averageB = b.grades.reduce((sum, next) => sum + next, 0)
        / b.grades.length;

        switch (order) {
          case 'asc':
            return compareNumeric(averageA, averageB);

          case 'desc':
            return compareNumeric(averageB, averageA);
        }
      });
      break;
  }

  return studentsArray;
}
