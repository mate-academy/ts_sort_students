/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint no-param-reassign: "error" */

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

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: any[], sortBy: SortType, order: SortOrder,
): object[] {
  let resultArray: any[] = [];

  if (sortBy === 'averageGrade') {
    resultArray = [...students].map((item) => {
      item.averageGrade = item.grades
        .reduce(
          (sum: number, current: number) => sum + current, 0,
        )
        / item.grades.length;

      return item;
    });
  } else {
    resultArray = [...students];
  }

  if (typeof resultArray[1][sortBy] === 'string') {
    resultArray.sort((a, b) => {
      const aLowercase = a[sortBy].toLowerCase();
      const bLowercase = b[sortBy].toLowerCase();

      if (aLowercase < bLowercase) {
        return order === 'asc' ? -1 : 1;
      }

      if (aLowercase > bLowercase) {
        return order === 'asc' ? 1 : -1;
      }

      return 0;
    });
  } else {
    resultArray.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return order === 'asc' ? -1 : 1;
      }

      if (a[sortBy] > b[sortBy]) {
        return order === 'asc' ? 1 : -1;
      }

      return 0;
    });
  }

  return resultArray;
}
