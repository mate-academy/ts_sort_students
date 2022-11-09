
export interface Student {
  // describe Student interface
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

function avergeSum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy:
SortType, order: SortOrder): Student[] | undefined {
  // write your function

  const result = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      return order === 'asc'
        ? result.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : result.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? result.sort((a, b) => avergeSum(a[sortBy]) - avergeSum(b[sortBy]))
        : result.sort((a, b) => avergeSum(b[sortBy]) - avergeSum(a[sortBy]));

    default:
      return order === 'asc'
        ? result.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : result.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
  }
}
