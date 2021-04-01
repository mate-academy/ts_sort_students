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
}

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortField, order: SortOrder) {
  const studentsList: Student[] = [...students];

  switch (sortBy) {
    case SortField.Name:
    case SortField.Surname:
      return studentsList.sort((a, b) => {
        const [A, B] = order === 'desc' ? [b, a] : [a, b];

        return A[sortBy].localeCompare(B[sortBy]);
      });

    case SortField.Age:
      return studentsList.sort((a, b) => {
        const [A, B] = order === 'desc' ? [b, a] : [a, b];

        return A.age - B.age;
      });

    case SortField.AverageGrade:
      return studentsList.sort((a, b) => {
        const A = a.grades.reduce((acc, num) => acc + num) / a.grades.length;
        const B = b.grades.reduce((acc, num) => acc + num) / b.grades.length;

        return order === 'desc' ? B - A : A - B;
      });

    case SortField.Married:
      return studentsList.sort((a, b) => {
        const [A, B] = order === 'desc' ? [b, a] : [a, b];

        return +A.married - +B.married;
      });
  };
};
