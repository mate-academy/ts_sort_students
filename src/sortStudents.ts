'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type
type Grades = number[];

type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: Grades;
};

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
  order: SortOrder
): Object {
  const editedStudents = students.map(student => {
    const sumGrades = student.grades.reduce((sum, x) => sum + x, 0);

    return {
      ...student,
      grades: sumGrades,
    };
  });

  switch (true) {
    case (sortBy === SortField.Age) :
      editedStudents.sort((studentA, studentB) => studentA.age - studentB.age);

      break;

    case (sortBy === SortField.Grades) :

      editedStudents
        .sort((studentA, studentB) => studentA.grades - studentB.grades);

      break;

    case (sortBy === SortField.Name || sortBy === SortField.Surname) :

      editedStudents
        .sort((studentA, studentB) => (
          studentA[sortBy].localeCompare(studentB[sortBy])
        ));

      break;

    case (sortBy === SortField.Married) :
      editedStudents.sort((studentA, studentB) => (
        +studentA.married - +studentB.married
      ));

      break;

    default :
      break;
  }

  if (order === 'desc') {
    return editedStudents.reverse();
  }

  return editedStudents;
};
