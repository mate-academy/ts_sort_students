// import { Interface } from "readline";

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

export function getAverageGrade(grades: number[]): number {
  const sum: number = grades.reduce((s: number, n: number) => s + n, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrayStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return arrayStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
    case SortType.Age:
    case SortType.Married:
      return arrayStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
    case SortType.AverageGrade:
      return arrayStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
          : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]);
      });
    default:
      return students;
  }
}
