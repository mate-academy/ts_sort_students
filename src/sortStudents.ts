/* eslint-disable no-nested-ternary */

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: true;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(array: number[]): number {
  const sum: number
    = array.reduce((accum: number, current: number) => accum + current, 0);

  return sum / array.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copy.sort(
          (a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]),
        )
        : copy;

    case SortType.Age:
    case SortType.Married:
      return order === 'desc'
        ? copy.sort(
          (a: Student, b: Student) => Number(b[sortBy]) - Number(a[sortBy]),
        )
        : copy;

    case SortType.AverageGrade:
      return SortType.AverageGrade
        ? order === 'desc'
          ? copy.sort((a: Student, b: Student) => getAverageGrade(b.grades)
            - getAverageGrade(a.grades))
          : copy.sort((a: Student, b: Student) => getAverageGrade(a.grades)
            - getAverageGrade(b.grades))
        : copy;

    default:
      return copy;
  }
}
