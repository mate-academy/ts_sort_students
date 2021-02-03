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
  Name = `name`,
  Surname = `surname`,
  Age = `age`,
  Married = `married`,
  AverageGrade = `averageGrade`,
}
Object.setPrototypeOf(SortField, Object.prototype);

type SortOrder = `asc` | `desc`;

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder): Student[] {
  const arr = [...students];

  switch (sortBy) {
    case SortField.Name:
      return arr.sort((a, b) => {
        if (order === `asc`) {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);
      });

    case SortField.Surname:
      return arr.sort((a, b) => {
        if (order === `asc`) {
          return a.surname.localeCompare(b.surname);
        }

        return b.surname.localeCompare(a.surname);
      });

    case SortField.Age:
      return arr.sort((a, b) => {
        if (order === `asc`) {
          return a.age - b.age;
        }

        return b.age - a.age;
      });

    case SortField.Married:
      return arr.sort((a, b) => {
        const aStr = a.married.toString();
        const bStr = b.married.toString();

        if (order === `asc`) {
          return aStr.localeCompare(bStr);
        }

        return bStr.localeCompare(aStr);
      });

    case SortField.AverageGrade:
      return arr.sort((a, b) => {
        const averageA = a.grades
          .reduce((el1, el2) => el1 + el2) / a.grades.length;
        const averageB = b.grades
          .reduce((el1, el2) => el1 + el2) / b.grades.length;

        if (order === `asc`) {
          return averageA - averageB;
        }

        return averageB - averageA;
      });
  }
}
