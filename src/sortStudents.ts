// import { numberLiteralTypeAnnotation } from "@babel/types";

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: [],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function average(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const array = [...students];

  switch (sortBy) {
    case SortType.Name:
      return array.sort((a: Student, b: Student) => (
        (order === 'asc')
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      ));
    case SortType.Surname:
      return array.sort((a: Student, b: Student) => (
        (order === 'asc')
          ? `${a.surname}`.localeCompare(`${b.surname}`)
          : `${b.surname}`.localeCompare(`${a.surname}`)
      ));
    case SortType.Age:
      return array.sort((a: Student, b: Student) => (
        (order === 'asc')
          ? a.age - b.age
          : b.age - a.age
      ));
    case SortType.Married:
      return array.sort((a: Student, b: Student) => (
        (order === 'asc')
          ? (`${a.married}`).localeCompare(`${b.married}`)
          : (`${b.married}`).localeCompare(`${a.married}`)
      ));
    case SortType.AverageGrade:
      return array.sort((a: Student, b: Student) => (
        (order === 'asc')
          ? average(a.grades) - average(b.grades)
          : average(b.grades) - average(a.grades)
      ));
    default:
      return array;
  }
}
