/* eslint-disable max-len */

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

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const newArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? newArr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : newArr.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? newArr.sort((a, b) => +a[sortBy] - +b[sortBy])
        : newArr.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? newArr.sort((a, b) => a[sortBy].reduce((sum, current) => sum + current) / a[sortBy].length - b[sortBy].reduce((sum, current) => sum + current) / b[sortBy].length)
        : newArr.sort((a, b) => b[sortBy].reduce((sum, current) => sum + current) / b[sortBy].length - a[sortBy].reduce((sum, current) => sum + current) / a[sortBy].length);
    default:
      return students;
  }
}
