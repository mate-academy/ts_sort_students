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
    copyStudents.sort((studentA: any, studentB: any) => {
      const positionOfStudents = sortOrder === 'asc'
        ? [studentA[key], studentB[key]]
        : [studentB[key], studentA[key]];
      const [first, second] = positionOfStudents;

      return key === 'grades'
        ? (first.reduce((sum: number, curent: number) => sum + curent, 0)
          / first.length)
          - (second.reduce((sum: number, curent: number) => sum + curent, 0)
          / second.length)
        : isNaN(first)
          ? first.localeCompare(second)
          : first - second;
    });
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
