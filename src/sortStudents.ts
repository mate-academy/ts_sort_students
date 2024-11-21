// import { type } from 'os';
// import { getDefaultFormatCodeSettings } from 'typescript';

export interface Student {
  name: string;
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

function countAvaregeGrade(grades: number[]):number {
  return (grades.reduce((a:number, b:number):number => a + b) / grades.length);
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? countAvaregeGrade(a.grades) - countAvaregeGrade(b.grades)
          : countAvaregeGrade(b.grades) - countAvaregeGrade(a.grades);

      default: throw Error('not valid input');
    }
  });
}
