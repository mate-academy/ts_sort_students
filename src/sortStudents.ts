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
}

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
};

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder
): Student[] {
  let sortedStudents: Student[];

  switch (sortBy) {
    case SortField.Name:
      sortedStudents = [...students].sort((currentStudent, nextStudent) => {
        return (order === 'asc')
          ? currentStudent.name.localeCompare(nextStudent.name)
          : nextStudent.name.localeCompare(currentStudent.name);
      });
      break;

    case SortField.Surname:
      sortedStudents = [...students].sort((currentStudent, nextStudent) => {
        return (order === 'asc')
          ? currentStudent.surname.localeCompare(nextStudent.surname)
          : nextStudent.surname.localeCompare(currentStudent.surname);
      });
      break;

    case SortField.Age:
      sortedStudents = [...students].sort((currentStudent, nextStudent) => {
        return (order === 'asc')
          ? currentStudent.age - nextStudent.age
          : nextStudent.age - currentStudent.age;
      });
      break;

    case SortField.Married:
      sortedStudents = [...students].sort((currentStudent, nextStudent) => {
        return (order === 'asc')
          ? String(currentStudent.married)
            .localeCompare(String(nextStudent.married))
          : String(nextStudent.married)
            .localeCompare(String(currentStudent.married));
      });
      break;

    case SortField.AverageGrade:
      sortedStudents = [...students].sort((currentStudent, nextStudent) => {
        const currentAverageGrade = currentStudent.grades.reduce((acc, value) =>
          Math.round((acc + value))) / currentStudent.grades.length;
        const nextAverageGrade = nextStudent.grades.reduce((acc, value) =>
          Math.round((acc + value))) / nextStudent.grades.length;

        return (order === 'asc')
          ? currentAverageGrade - nextAverageGrade
          : nextAverageGrade - currentAverageGrade;
      });
      break;

    default:
      return students;
  }

  return sortedStudents;
}
