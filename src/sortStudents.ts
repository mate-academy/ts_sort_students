// import { valueToNode } from "@babel/types";

export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAverage = (value : number[]): number => value
  .reduce((a, b) => a + b, 0) / value.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] | number {
  // write your function

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? [...students].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.AverageGrade:
      return [...students].sort((a, b) => (order === 'asc'
        ? getAverage(a.grades) - getAverage(b.grades)
        : getAverage(b.grades) - getAverage(a.grades)
      ));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? [...students].sort((a, b) => +(a[sortBy]) - +(b[sortBy]))
        : [...students].sort((a, b) => +(b[sortBy]) - +(a[sortBy]));

    default: throw new Error('Please,enter valid param');
  }
}
