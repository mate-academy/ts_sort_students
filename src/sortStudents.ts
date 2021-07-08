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
}

type sortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortField,
  order: sortOrder) {
  // write your function
  const copyStudents = [...students];

  const sortTwoStudent = (prevStud: string, nextStud: string) => {
    if (order === 'asc') {
      return prevStud.localeCompare(nextStud);
    }

    return nextStud.localeCompare(prevStud);
  };

  const getAverageGrades = (arrGrades: number[]) => {
    return arrGrades.reduce((sum, currentGrades) => (
      sum + currentGrades
    )) / arrGrades.length;
  };

  switch (sortBy) {
    case SortField.Name:
      return (
        copyStudents.sort((prevStud, nextStud) => (
          sortTwoStudent(prevStud.name, nextStud.name)
        ))
      );

    case SortField.Surname:
      return (
        copyStudents.sort((prevStud, nextStud) => (
          sortTwoStudent(prevStud.surname, nextStud.surname)
        ))
      );

    case SortField.Age:
      return (
        copyStudents.sort((prevStud, nextStud) => {
          if (order === 'asc') {
            return prevStud.age - nextStud.age;
          }

          return nextStud.age - prevStud.age;
        })
      );

    case SortField.Married:
      return (
        copyStudents.sort((prevStud, nextStud) => {
          let prev = prevStud.married;
          let next = nextStud.married;

          if (order === 'desc') {
            prev = nextStud.married;
            next = prevStud.married;
          }

          if (prev === next) {
            return 0;
          }

          if (prev) {
            return 1;
          }

          return -1;
        })
      );

    case SortField.AverageGrade:
      return (
        copyStudents.sort((prevStud, nextStud) => {
          const prevAverGrade = getAverageGrades(prevStud.grades);
          const nextAverGrade = getAverageGrades(nextStud.grades);

          if (order === 'asc') {
            return prevAverGrade - nextAverGrade;
          }

          return nextAverGrade - prevAverGrade;
        })
      );
  }
};
