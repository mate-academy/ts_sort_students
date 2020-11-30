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

enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortField, order: SortOrder): Student[] {

}
