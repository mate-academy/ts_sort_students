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

type Sort = 'asc' | 'desc';

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'maried',
  AverageGrade = 'grades',
};

export function sortStudents(
  students: Student[], sortBy: SortField, order: Sort) {
  // write your function
  const copy = [...students];

  return copy.sort((a, b) => {
    switch (sortBy) {
      case SortField.Name:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortField.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortField.AverageGrade:
        const [A, B] = getAverageGrade(a.grades, b.grades);

        return order === 'asc'
          ? A - B
          : B - A;

      case SortField.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case SortField.Married:
        return order === 'asc'
          ? +a.married - +b.married
          : +b.married - +a.married;
    }
  });
}

function getAverageGrade(first: number[], second: number[]) {
  const firstAverege = first.reduce((a, b) => a + b) / first.length;
  const secondAverege = second.reduce((a, b) => a + b) / second.length;

  return [firstAverege, secondAverege];
}
