// import { stringify } from "querystring";

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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageValue({ grades }: Student): number {
  return grades.reduce((x, y) => x + y) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const orders: 1 | -1 = order === 'asc' ? 1 : -1;

  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (a[sortBy].localeCompare(b[sortBy])) * orders;
      case SortType.Age:
      case SortType.Married:
        return (+a[sortBy] - +b[sortBy]) * orders;
      case SortType.AverageGrade:
        return (averageValue(a) - averageValue(b)) * orders;
      default:
        throw new Error('The students should go in the original order');
    }
  });
}
