'use strict';
// describe Student type
// create SortField enum and export it
// create SortOrder literal type

export enum SortField {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortField,
  order: SortOrder,
): Student[] {
  const studentsForSort = [...students];

  switch (sortBy) {
    case SortField.Name:
      studentsForSort.sort((currentStudent, nextStudent) => (
        currentStudent.name.localeCompare(nextStudent.name)
      ));

      if (order === 'desc') {
        studentsForSort.reverse();
      }

      break;

    case SortField.Surname:
      studentsForSort.sort((currentStudent, nextStudent) => (
        currentStudent.surname.localeCompare(nextStudent.surname)
      ));

      if (order === 'desc') {
        studentsForSort.reverse();
      }

      break;

    case SortField.Age:
      studentsForSort.sort((currentStudent, nextStudent) => (
        currentStudent.age - nextStudent.age
      ));

      if (order === 'desc') {
        studentsForSort.reverse();
      }

      break;

    case SortField.Married:
      studentsForSort.sort((currentStudent, nextStudent) => (
        currentStudent.married.toString().localeCompare(
          nextStudent.married.toString()
        )
      ));

      if (order === 'desc') {
        studentsForSort.reverse();
      }

      break;

    case SortField.AverageGrade:
      studentsForSort.sort((currentStudent, nextStudent) => {
        const currentStudentAverage
          = currentStudent.grades.reduce((acc, grade) => (
            acc + grade
          ), 0) / currentStudent.grades.length;

        const nextStudentAverage
          = nextStudent.grades.reduce((acc, grade) => (
            acc + grade
          ), 0) / nextStudent.grades.length;

        return currentStudentAverage - nextStudentAverage;
      });

      if (order === 'desc') {
        studentsForSort.reverse();
      }

      break;

    default:
      return students;
  }

  return studentsForSort;
}
