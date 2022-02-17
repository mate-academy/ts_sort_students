// import { arrayExpression } from "@babel/types";

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function averageGrade(arr: number[]): number {
  return arr.reduce((sum, n) => sum + n, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const newArr = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? newArr.sort((el1, el2) => el1[sortBy].localeCompare(el2[sortBy]))
        : newArr.sort((el1, el2) => el2[sortBy].localeCompare(el1[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? newArr.sort((el1, el2) => el1[sortBy] - el2[sortBy])
        : newArr.sort((el1, el2) => el2[sortBy] - el1[sortBy]);

    case SortType.Married:
      return order === 'asc'
        ? newArr.sort((el1, el2) => +el1[sortBy] - +el2[sortBy])
        : newArr.sort((el1, el2) => +el2[sortBy] - +el1[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? newArr.sort((el1, el2) => averageGrade(el1.grades)
          - averageGrade(el2.grades))
        : newArr.sort((el1, el2) => averageGrade(el2.grades)
        - averageGrade(el1.grades));

    default:
      break;
  }

  return newArr;
}
