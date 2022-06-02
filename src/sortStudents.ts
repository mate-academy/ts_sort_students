// import { Interface } from "readline";

export interface Student {
  name: 'string',
  surname: 'string',
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        return [...students].sort((a: Student, b: Student) => {
          return a.name.localeCompare(b.name);
        });
      case SortType.Surname:
        return [...students].sort((a: Student, b: Student) => {
          return a.surname.localeCompare(b.surname);
        });
      case SortType.Age:
        return [...students].sort((a: Student, b: Student) => {
          return a.age - b.age;
        });
      case SortType.Married:
        return [...students].sort((a: Student, b: Student) => {
          switch (true) {
            case a.married && b.married:
              return 0;
            case a.married:
              return 1;
            default:
              return -1;
          }
        });
      case SortType.AverageGrade:
        return [...students].sort((a: Student, b: Student) => {
          const sumA: number
          = a.grades.reduce((s: number, n: number) => s + n, 0);
          const averageA = sumA / a.grades.length;
          const sumB: number
          = b.grades.reduce((s: number, n: number) => s + n, 0);
          const averageB = sumB / b.grades.length;

          return averageA - averageB;
        });
      default:
        return students;
    }
  } else {
    switch (sortBy) {
      case SortType.Name:
        return [...students].sort((a: Student, b: Student) => {
          return b.name.localeCompare(a.name);
        });
      case SortType.Surname:
        return [...students].sort((a: Student, b: Student) => {
          return b.surname.localeCompare(a.surname);
        });
      case SortType.Age:
        return [...students].sort((a: Student, b: Student) => {
          return b.age - a.age;
        });
      case SortType.Married:
        return [...students].sort((a: Student, b: Student) => {
          switch (true) {
            case a.married && b.married:
              return 0;
            case a.married:
              return -1;
            default:
              return 1;
          }
        });
      case SortType.AverageGrade:
        return [...students].sort((a: Student, b: Student) => {
          const sumA: number
          = a.grades.reduce((s: number, n: number) => s + n, 0);
          const averageA = sumA / a.grades.length;
          const sumB: number
          = b.grades.reduce((s: number, n: number) => s + n, 0);
          const averageB = sumB / b.grades.length;

          return averageB - averageA;
        });
      default:
        return students;
    }
  }
}
