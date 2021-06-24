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
  Surname ='surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
};

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortField, order: SortOrder
): Student[] {
  switch (sortBy) {
    case SortField.Name:
      if (order === 'asc') {
        return [...students].sort(
          (student1, student2) => student1.name.localeCompare(student2.name)
        );
      } else {
        return [...students].sort(
          (student1, student2) => student2.name.localeCompare(student1.name)
        );
      }

    case SortField.Surname:
      if (order === 'asc') {
        return [...students].sort((student1, student2) =>
          student1.surname.localeCompare(student2.surname)
        );
      } else {
        return [...students].sort((student1, student2) =>
          student2.surname.localeCompare(student1.surname)
        );
      }

    case SortField.Age:
      if (order === 'asc') {
        return [...students].sort(
          (student1, student2) => student1.age - student2.age
        );
      } else {
        return [...students].sort(
          (student1, student2) => student2.age - student1.age
        );
      }

    case SortField.Married:
      const studentsMarried = [...students].filter(student => student.married);
      const studentsNotMarried = [...students].filter(
        student => !student.married
      );

      if (order === 'asc') {
        return [...studentsNotMarried, ...studentsMarried];
      } else {
        return [...studentsMarried, ...studentsNotMarried];
      }

    case SortField.AverageGrade:
      if (order === 'asc') {
        return [...students].sort(
          (student1, student2) => student1.grades.reduce(
            (acc, el) => acc + el, 0
          ) / student1.grades.length - student2.grades.reduce(
            (acc, el) => acc + el, 0
          ) / student2.grades.length
        );
      } else {
        return [...students].sort(
          (student1, student2) => student2.grades.reduce(
            (acc, el) => acc + el, 0
          ) / student2.grades.length - student1.grades.reduce(
            (acc, el) => acc + el, 0
          ) / student1.grades.length
        );
      }
  }
};
