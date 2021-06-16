'use strict';
// describe Student type
type Student = {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[],
}
// create SortField enum and export it

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}
// create SortOrder literal type

type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortField,
  order: SortOrder) {
  // write your function
  const copyStudents = students.map(student => ({ ...student }));

  function getSortedStudents(key: string, sortOrder: string) {
    if (sortOrder === 'asc') {
      copyStudents.sort((studentA: any, studentB: any) =>
        key === 'grades'
          ? (studentA[key]
            .reduce((sum: number, curent: number) => sum + curent, 0)
              / studentA[key].length)
          - (studentB[key]
            .reduce((sum: number, curent: number) => sum + curent, 0)
              / studentB[key].length)
          : isNaN(studentA[key])
            ? studentA[key]
              .localeCompare(studentB[key])
            : +studentA[key] - +studentB[key]
      );
    } else {
      copyStudents.sort((studentA: any, studentB: any) =>
        key === 'grades'
          ? (studentB[key]
            .reduce((sum: number, curent: number) => sum + curent, 0)
              / studentB[key].length)
          - (studentA[key]
            .reduce((sum: number, curent: number) => sum + curent, 0)
              / studentA[key].length)
          : isNaN(studentA[key])
            ? studentB[key]
              .localeCompare(studentA[key])
            : +studentB[key] - +studentA[key]
      );
    }
  }

  switch (sortBy) {
    case SortField.Name:
      getSortedStudents('name', order);
      break;

    case SortField.Surname:
      getSortedStudents('surname', order);
      break;

    case SortField.Age:
      getSortedStudents('age', order);
      break;

    case SortField.Married:
      getSortedStudents('married', order);
      break;

    case SortField.AverageGrade:
      getSortedStudents('grades', order);
      break;
  }

  return copyStudents;
}
