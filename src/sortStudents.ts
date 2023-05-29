// import { error } from "console";

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

const averageAges = (grades: number[]): number => {
  return grades.length
    ? grades.reduce((sum, a) => sum + a, 0) / grades.length
    : 0;
};

export function sortStudents(students: Student[], sortBy: SortType, order:
SortOrder): Student[] {
  const copiedStudents: Student[] = [...students];

  copiedStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];

      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? averageAges(a[sortBy]) - averageAges(b[sortBy])
          : averageAges(b[sortBy]) - averageAges(a[sortBy]);

      default:
        throw new Error('');
    }
  });

  return copiedStudents;
}
