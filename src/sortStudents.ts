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

enum SortField {
  name,
  surname,
  age,
  married,
  avarageGrade
};

type Order = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: keyof Student, order: Order) {
  const fields = [];

  for (const student of students) {
    let newField = student[sortBy];

    if (newField instanceof Array) {
      newField = newField.reduce((sum, a) => sum + a, 0) / newField.length;
    }

    fields.push(newField);
  }

  if (sortBy === 'married') {
    return order === 'asc'
      ? fields.sort((a, b) => {
        return (a === b)? 0 : a? -1 : 1
      })
      : fields.sort((a, b) => {
        return (a === b)? 0 : a? 1 : -1
      })
  }

  if (sortBy === 'age' || sortBy === 'grades') {
    return order === 'asc'
      ? fields.sort((a, b) => Number(a) - Number(b))
      : fields.sort((a, b) => Number(b) - Number(a))
  }

  return order === 'asc'
    ? fields.sort((a, b) => {
      return a > b ? 1 : -1;
    })
    : fields.sort((a, b) => {
      return a > b ? -1 : 1;
    })
}
