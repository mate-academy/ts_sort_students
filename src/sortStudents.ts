// import { groupCollapsed } from "console";

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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageOfGrades(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | string {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'desc'
        ? studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
        : studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    case SortType.Age:
      return order === 'desc'
        ? studentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy])
        : studentsCopy.sort((a, b) => +a[sortBy] - +b[sortBy]);

    case SortType.Married:
      return order === 'desc'
        ? studentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy])
        : studentsCopy.sort((a, b) => +a[sortBy] - +b[sortBy]);

    case SortType.AverageGrade:
      return order === 'desc'
        ? studentsCopy.sort((a, b) => {
          return averageOfGrades(b.grades) - averageOfGrades(a.grades);
        })
        : studentsCopy.sort((a, b) => {
          return averageOfGrades(a.grades) - averageOfGrades(b.grades);
        });
    default:
      return 'Error';
  }
}
