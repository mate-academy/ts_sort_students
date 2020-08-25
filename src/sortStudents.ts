'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

type StudentType = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
};

type SortOrder =
  | 'asc'
  | 'desc';

export function sortStudents(
  students: StudentType[],
  sortBy: SortField,
  order: SortOrder,
): Array<StudentType> {
  // write your function
  const copyStudents = [...students];

  switch (sortBy) {
    case SortField.Name:
      copyStudents.sort((student1, student2) =>
        order !== 'desc'
          ? student1.name.localeCompare(student2.name)
          : student2.name.localeCompare(student1.name));
      break;
    case SortField.Surname:
      copyStudents.sort((student1, student2) =>
        order !== 'desc'
          ? student1.surname.localeCompare(student2.surname)
          : student2.surname.localeCompare(student1.surname));
      break;
    case SortField.Age:
      copyStudents.sort((student1, student2) =>
        order !== 'desc'
          ? student1.age - student2.age
          : student2.age - student1.age);
      break;
    case SortField.Married:
      copyStudents.sort((student1, student2) => {
        return order !== 'desc'
          ? Number(student1.married) - Number(student2.married)
          : Number(student2.married) - Number(student1.married);
      });
      break;
    case SortField.AverageGrade:
      copyStudents.sort((student1, student2) => {
        const averageGrade1 = student1.grades.reduce((prev, student) =>
          prev + student) / student1.grades.length;
        const averageGrade2 = student2.grades.reduce((prev, student) =>
          prev + student) / student2.grades.length;

        return order !== 'desc'
          ? averageGrade1 - averageGrade2
          : averageGrade2 - averageGrade1;
      });
      break;
    default:
      break;
  }

  return copyStudents;
}

module.exports = {
  SortField,
  sortStudents,
};
