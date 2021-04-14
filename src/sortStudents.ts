'use strict';

interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

type SortOrder = 'asc' | 'desc';

export enum SortField {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
};

export function sortStudents(students: Student[], field: SortField, order: SortOrder) {
  const studentsCopy = students.map(student => ({...student}));

  let result;

  switch (field) {
    case SortField.Name: {
      result = studentsCopy
        .sort((studentPrev, studentNext) => studentPrev.name.localeCompare(studentNext.name));
      break;
    }

    case SortField.Surname: {
      result = studentsCopy
        .sort((studentPrev, studentNext) => studentPrev.surname.localeCompare(studentNext.surname));
      break;
    }

    case SortField.Age: {
      result = studentsCopy
        .sort((studentPrev, studentNext) => studentPrev.age - studentNext.age);
      break;
    }

    case SortField.Married: {
      result = studentsCopy
        .sort((a, b) => {
          if (a.married === b.married) {
            return 0;
          }

          if (a.married && !b.married) {
            return -1;
          }

          if (!a.married && b.married) {
            return 1;
          }
        }).reverse();
      break;
    }

    case SortField.AverageGrade: {
      result = studentsCopy
        .sort((studentPrev, studentNext) => {
          const curentAverageGrade = studentPrev.grades.reduce((acc, curVal) => Math.round((acc + curVal))) / studentPrev.grades.length;
          const nextAverageGrade = studentNext.grades.reduce((acc, curVal) => Math.round((acc + curVal))) / studentNext.grades.length;

          return curentAverageGrade - nextAverageGrade;
        });
      break;
    };
  };

  if (order === 'desc') {
    return result.reverse();
  };

  return result;
}
