
export interface Student {
  // describe Student interface
  name: string,
  surname: string
  age: number,
  married: boolean,
  grades: number[],
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

export function sortStudents<T extends Student>(
  students: T[],
  sortBy: SortType,
  order: SortOrder,
): T[] {
  function numberSort(argument1: T, argument2: T): number {
    return +argument1[sortBy] - +argument2[sortBy];
  }

  function stringSort(argument1: T, argument2: T): number {
    return String(argument1[sortBy]).localeCompare(String(argument2[sortBy]));
  }

  function arraySort(argument1: T, argument2: T): number {
    const firstArray: number[] = argument1[sortBy] as number[];
    const secondArray: number[] = argument2[sortBy] as number[];

    return firstArray.reduce((one, two) => one + two, 0) / firstArray.length
          - secondArray.reduce((one, two) => one + two, 0) / secondArray.length;
  }

  return [...students].sort((a, b) => {
    switch (sortBy) {
      case 'age':
      case 'married':
        return order === 'asc' ? numberSort(a, b) : numberSort(b, a);
      case 'name':
      case 'surname':
        return order === 'asc' ? stringSort(a, b) : stringSort(b, a);
      case 'grades':
        return order === 'asc' ? arraySort(a, b) : arraySort(b, a);
      default:
        return 0;
    }
  });
}
