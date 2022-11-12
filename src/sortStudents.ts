//  import { numberLiteralTypeAnnotation } from "@babel/types";

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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function averageGrade(grades: number[]): number {
  return grades.reduce((a: number, b: number) => (a + b), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const unsortedArray: Student[] = [...students];

  let result: Student[] = [];

  switch (order) {
    case 'asc':
      if (sortBy === 'name' || sortBy === 'surname') {
        result = unsortedArray.sort((a: Student, b: Student) => {
          return a[sortBy].localeCompare(b[sortBy]);
        });
      }

      if (sortBy === 'age') {
        result = unsortedArray.sort((a: Student, b: Student) => a.age - b.age);
      }

      if (sortBy === 'married') {
        result = unsortedArray.sort((a: Student, b: Student) => {
          return +a.married - +b.married;
        });
      }

      if (sortBy === 'grades') {
        result = unsortedArray.sort((a: Student, b: Student) => {
          const averageFirst = averageGrade(a.grades);

          const averageSecond = averageGrade(b.grades);

          return averageFirst - averageSecond;
        });
      }

      break;

    case 'desc':
      if (sortBy === 'name' || sortBy === 'surname') {
        result = unsortedArray.sort((a: Student, b: Student) => {
          return b[sortBy].localeCompare(a[sortBy]);
        });
      }

      if (sortBy === 'age') {
        result = unsortedArray.sort((a: Student, b: Student) => b.age - a.age);
      }

      if (sortBy === 'married') {
        result = unsortedArray.sort((a: Student, b: Student) => {
          return +b.married - +a.married;
        });
      }

      if (sortBy === 'grades') {
        result = unsortedArray.sort((a: Student, b: Student) => {
          const averageFirst = averageGrade(a.grades);

          const averageSecond = averageGrade(b.grades);

          return averageSecond - averageFirst;
        });
      }

      break;

    default:
      return result;
  }

  return result;
}
