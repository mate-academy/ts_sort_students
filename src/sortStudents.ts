'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type
export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
};

type typeOfOrder = 'asc' | 'desc';

type typeOfStudent = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export function sortStudents(students: typeOfStudent[], sortBy: SortField, order
  : typeOfOrder): typeOfStudent[] {
  // write your function
  const copyOfStudents = [...students];

  switch (sortBy) {
    case SortField.Name:
      copyOfStudents.sort((student1, student2) =>
        order !== 'desc' ? student1.name.localeCompare(student2.name)
          : student2.name.localeCompare(student1.name));
      break;

    case SortField.Surname:
      copyOfStudents.sort((student1, student2) =>
        order !== 'desc' ? student1.surname.localeCompare(student2.surname)
          : student2.surname.localeCompare(student1.surname));
      break;
    case SortField.Age:
      copyOfStudents.sort((student1, student2) =>
        order !== 'desc' ? student1.age - student2.age
          : student2.age - student1.age);
      break;
    case SortField.Married:
      copyOfStudents.sort((student1, student2) =>
        order !== 'desc' ? Number(student1.married) - Number(student2.married)
          : Number(student2.married) - Number(student1.married));
      break;
    case SortField.AverageGrade:
      copyOfStudents.sort((student1, student2) =>
        order !== 'desc' ? (student1.grades.reduce((sum, x) => sum + x, 0)
         / student1.grades.length)
        - (student2.grades.reduce((sum, x) => sum + x, 0)
         / student2.grades.length)
          : (student2.grades.reduce((sum, x) => sum + x, 0)
           / student2.grades.length)
          - (student1.grades.reduce((sum, x) => sum + x, 0)
           / student1.grades.length));
      break;
  }

  return copyOfStudents;
}
