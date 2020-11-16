'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type
type SortOrder = 'asc' | 'desc';
type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
};

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export function sortStudents(
  students: Student[]
  , sortBy: SortField
  , order: SortOrder) {
  const sorting = sortBy;
  const copyStudenst = [...students];

  function calculateAvarageGrades(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

  function sorted(sortedBy) {
    switch (sortedBy) {
      case SortField.Name:
        if (order === 'asc') {
          copyStudenst.sort((a, b) =>
            (a.name.localeCompare(b.name)));
        } else {
          copyStudenst.sort((a, b) =>
            (b.name.localeCompare(a.name)));
        }
        break;

      case SortField.Surname:
        if (order === 'asc') {
          copyStudenst.sort((a, b) => (a.surname
            .localeCompare(b.surname)));
        } else {
          copyStudenst.sort((a, b) => (b.surname
            .localeCompare(a.surname)));
        }
        break;

      case SortField.Age:
        if (order === 'asc') {
          copyStudenst.sort((a, b) => a.age - b.age);
        } else {
          copyStudenst.sort((a, b) => b.age - a.age);
        }
        break;

      case SortField.Married:
        if (order === 'asc') {
          copyStudenst.sort((a, b) =>
            Number(a.married) - Number(b.married));
        } else {
          copyStudenst.sort((a, b) =>
            Number(b.married) - Number(a.married));
        }
        break;

      case SortField.AverageGrade:
        if (order === 'asc') {
          copyStudenst.sort((a, b) =>
            calculateAvarageGrades(a.grades)
            - calculateAvarageGrades(b.grades));
        } else {
          copyStudenst.sort((a, b) =>
            calculateAvarageGrades(b.grades)
            - calculateAvarageGrades(a.grades));
        }
        break;
    }
  }

  sorted(sorting);

  return copyStudenst;
}
