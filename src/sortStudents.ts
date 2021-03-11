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
};

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

type Order = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: Order
) {
  const result = [...students];

  switch (sortBy) {
    case SortField.Name:
      result.sort((student1, student2) => {
        if (
          student1.name.toLocaleLowerCase() < student2.name.toLocaleLowerCase()
        ) {
          return -1;
        }

        if (
          student1.name.toLocaleLowerCase() > student2.name.toLocaleLowerCase()
        ) {
          return 1;
        }

        return 0;
      });

      if (order === 'desc') {
        result.reverse();
      }

      return result;

    case SortField.Age:
      return result.sort((student1, student2) => {
        if (order === 'desc') {
          return student2.age - student1.age;
        }

        return student1.age - student2.age;
      });

    case SortField.Married:
      return result.sort((student1, student2) => {
        if (order === 'desc') {
          return student2.married
            .toString()
            .localeCompare(student1.married.toString());
        }

        return student1.married
          .toString()
          .localeCompare(student2.married.toString());
      });

    case SortField.Surname:
      result.sort((student1, student2) => {
        if (
          student1.surname.toLocaleLowerCase()
          < student2.surname.toLocaleLowerCase()
        ) {
          return -1;
        }

        if (
          student1.surname.toLocaleLowerCase()
          > student2.surname.toLocaleLowerCase()
        ) {
          return 1;
        }

        return 0;
      });

      if (order === 'desc') {
        return result.reverse();
      }

      return result;

    case SortField.AverageGrade:
      return result.sort((student1, student2) => {
        const arrAvg1
        = student1.grades.reduce((a, b) => a + b, 0) / student1.grades.length;
        const arrAvg2
        = student2.grades.reduce((a, b) => a + b, 0) / student2.grades.length;

        if (order === 'desc') {
          return arrAvg2 - arrAvg1;
        }

        return arrAvg1 - arrAvg2;
      });

    default:
      return result;
  }
}
