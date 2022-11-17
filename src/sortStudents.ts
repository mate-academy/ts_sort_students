
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
  AverageGrade = 'grades'
}

type SortOrder = 'asc' | 'desc';

export type { SortOrder };

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let studentsList = [...students];

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    studentsList = studentsList
      .sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });
  }

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    studentsList = studentsList
      .sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a[sortBy] - b[sortBy];
        }

        return b[sortBy] - a[sortBy];
      });
  }

  if (sortBy === SortType.AverageGrade) {
    studentsList = studentsList
      .sort((a: Student, b: Student) => {
        const first = a[sortBy].reduce((prev, curr) => {
          return prev + curr;
        }, 0) / a[sortBy].length;
        const second = b[sortBy].reduce((prev, curr) => {
          return prev + curr;
        }, 0) / b[sortBy].length;

        if (order === 'asc') {
          return first - second;
        }

        return second - first;
      });
  }

  return studentsList;
}
