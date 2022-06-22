//  import { reduceEachLeadingCommentRange } from "typescript";

export interface Student {
  name: string,
  surname: string,
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  return [...students].sort((a, b) => {
    const firstArr = a.grades.reduce((acc, cur) => (acc + cur))
    / a.grades.length;
    const secondArr = b.grades.reduce((acc, cur) => (acc + cur))
    / b.grades.length;

    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);
      case SortType.Surname:
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        return b.surname.localeCompare(a.surname);
      case SortType.Age:
        if (order === 'asc') {
          return (a.age - b.age);
        }

        return (b.age - a.age);
      case SortType.Married:
        if (order === 'asc') {
          return (+a.married - +b.married);
        }

        return (+b.married - +a.married);
      case SortType.AverageGrade:
        if (order === 'asc') {
          return (firstArr - secondArr);
        }

        return (secondArr - firstArr);
      default:
        return 0;
    }
  });
}
