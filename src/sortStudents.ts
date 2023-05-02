// import { SortOrder } from './sortStudents';

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrades(grades: number[]): number {
  return grades.reduce((acc, val) => acc + val) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  switch (sortBy) {
    case (SortType.Name):
    default:
      if (order === 'asc') {
        return [...students]
          .sort((prev, cur) => prev.name.localeCompare(cur.name));
      }

      return [...students]
        .sort((prev, cur) => cur.name.localeCompare(prev.name));

    case (SortType.Surname):
      if (order === 'asc') {
        return [...students]
          .sort((prev, cur) => prev.surname.localeCompare(cur.surname));
      }

      return [...students]
        .sort((prev, cur) => cur.surname.localeCompare(prev.surname));

    case (SortType.Age):
      if (order === 'asc') {
        return [...students]
          .sort((prev, cur) => prev.age - cur.age);
      }

      return [...students]
        .sort((prev, cur) => cur.age - prev.age);

    case (SortType.AverageGrade):
      if (order === 'asc') {
        return [...students]
          .sort((prev, cur) => {
            return getAverageGrades(prev.grades) - getAverageGrades(cur.grades);
          });
      }

      return [...students]
        .sort((prev, cur) => {
          return getAverageGrades(cur.grades) - getAverageGrades(prev.grades);
        });

    case (SortType.Married):
      if (order === 'asc') {
        return [...students]
          .sort((prev, cur) => +prev.married - +cur.married);
      }

      return [...students]
        .sort((prev, cur) => +cur.married - +prev.married);
  }
}
