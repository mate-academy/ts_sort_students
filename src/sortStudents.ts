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
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

 type SortOrder = 'asc'| 'desc';

export function sortStudents(students: Student[],
  sortBy: SortField, order: SortOrder): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortField.Name:
      copyStudents.sort((x, y) =>
        (order === 'asc')
          ? x.name.localeCompare(y.name)
          : y.name.localeCompare(x.name));
      break;
    case SortField.Surname:
      copyStudents.sort((x, y) =>
        (order === 'asc')
          ? x.surname.localeCompare(y.surname)
          : y.surname.localeCompare(x.surname));
      break;
    case SortField.Age:
      copyStudents.sort((x, y) =>
        (order === 'asc')
          ? x.age - y.age
          : y.age - x.age);
      break;
    case SortField.Married:
      copyStudents.sort((x, y) =>
        (order === 'asc')
          ? (+x.married) - (+y.married)
          : (+y.married) - (+x.married));
      break;
    case SortField.AverageGrade:
      copyStudents.sort((x, y) => {
        const red1 = x.grades.reduce((acc, val) => acc + val, 0);
        const red2 = y.grades.reduce((acc, val) => acc + val, 0);

        return (order === 'asc')
          ? (red1 / x.grades.length) - (red2 / y.grades.length)
          : (red2 / x.grades.length) - (red1 / y.grades.length);
      });
      break;
  }

  return students;
  // write your function
}
