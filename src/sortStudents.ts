// import { getDefaultFormatCodeSettings } from "typescript";

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

function averGrade(array: number[]): number {
  return array.reduce((sum, x) => (sum + x), 0) / array.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudent = [...students];

  switch (sortBy) {
    case 'name':
      if (order === 'asc') {
        return newStudent.sort((a, b) => a.name.localeCompare(b.name));
      }

      return newStudent.sort((a, b) => b.name.localeCompare(a.name));

    case 'surname':
      if (order === 'asc') {
        return newStudent.sort((a, b) => a.surname.localeCompare(b.surname));
      }

      return newStudent.sort((a, b) => b.surname.localeCompare(a.surname));

    case 'age':
      if (order === 'asc') {
        return newStudent.sort((a, b) => a.age - b.age);
      }

      return newStudent.sort((a, b) => b.age - a.age);

    case 'married':
      if (order === 'asc') {
        return newStudent.sort((a, b) => a.married - b.married);
      }

      return newStudent.sort((a, b) => b.married - a.married);

    case 'grades':
      if (order === 'asc') {
        return newStudent.sort((a, b) => averGrade(a.grades)
        - averGrade(b.grades));
      }

      return newStudent.sort((a, b) => averGrade(b.grades)
        - averGrade(a.grades));

    default:
      return newStudent;
  }
}
