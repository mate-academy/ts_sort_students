// import { Student, SortType } from './sortStudents';

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

const getAver = (marks:number[]): number => {
  const averageMark:number = marks
    .reduce((prev: number, curr: number): number => prev + curr, 0)
    / marks.length;

  return averageMark;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAver(a[sortBy]) - getAver(b[sortBy])
          : getAver(b[sortBy]) - getAver(a[sortBy]);

      case SortType.Married:
      case SortType.Age:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      default: throw Error('Cannot be sorted by this parameter');
    }
  });
}
