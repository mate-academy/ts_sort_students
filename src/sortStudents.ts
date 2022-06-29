// import { setOriginalNode } from "typescript";

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
  AverageGrade = 'grade'
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(studentGrades: number[]): number {
  return studentGrades.reduce((previousGrade, currentGrade) => {
    return (previousGrade + currentGrade);
  }, 0) / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Age:
        if (order === 'desc') {
          return b.age - a.age;
        }

        return a.age - b.age;

      case SortType.Married:
        if (order === 'desc') {
          return Number(b.married) - Number(a.married);
        }

        return Number(a.married) - Number(b.married);

      case SortType.Name:
        if (order === 'desc') {
          return b.name.localeCompare(a.name);
        }

        return a.name.localeCompare(b.name);

      case SortType.Surname:
        if (order === 'desc') {
          return b.surname.localeCompare(a.surname);
        }

        return a.surname.localeCompare(b.surname);

      case SortType.AverageGrade:
        if (order === 'desc') {
          return getAverageGrade(b.grades) - getAverageGrade(a.grades);
        }

        return getAverageGrade(a.grades) - getAverageGrade(b.grades);

      default:
        return 0;
    }
  });

  return copy;
}
