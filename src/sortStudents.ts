
export interface Student {
  // describe Student interface
}

export enum SortType {
  // describe SortType enum
}

// create SortOrder type
export type SortOrder;


interface Student {
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

type SortOrder = 'asc' | 'desc';

function callback(sum: number, val: number): number {
  return sum + val;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          a[sortBy].localeCompare(b[sortBy])))
        : sortedArr.sort((a, b) => (
          b[sortBy].localeCompare(a[sortBy])));

    case SortType.Age:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          a[sortBy] - b[sortBy]))
        : sortedArr.sort((a, b) => (
          b[sortBy] - a[sortBy]));

    case SortType.Married:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          +a[sortBy] - +b[sortBy]))
        : sortedArr.sort((a, b) => (
          +b[sortBy] - +a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          (a[sortBy].reduce(callback, 0) / a[sortBy].length)
          - (b[sortBy].reduce(callback, 0) / b[sortBy].length)))
        : sortedArr.sort((a, b) => (
          (b[sortBy].reduce(callback, 0) / b[sortBy].length)
          - (a[sortBy].reduce(callback, 0) / a[sortBy].length)));

    default: {
      break;
    }
  }

  return sortedArr;
}
