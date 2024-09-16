export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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

function getAverageGrades(grades: number[]): number {
  return grades.reduce((acc: number, currGrade: number): number => (
    acc + currGrade
  ), 0) / grades.length;
}

function numberCompare(prev: number, curr: number, order: string): number {
  if (order === 'asc') {
    return prev - curr;
  }

  return curr - prev;
}

function stringCompare(prev: string, curr: string, order: string): number {
  if (order === 'asc') {
    return prev.localeCompare(curr);
  }

  return curr.localeCompare(prev);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  return [...students]
    .sort((
      prevStudent: Student,
      currStudent: Student,
    ): number => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return stringCompare(prevStudent[sortBy], currStudent[sortBy], order);

        case SortType.AverageGrade:
          return numberCompare(
            getAverageGrades(prevStudent[sortBy]),
            getAverageGrades(currStudent[sortBy]),
            order,
          );

        default:
          return numberCompare(
            Number(prevStudent[sortBy]),
            Number(currStudent[sortBy]),
            order,
          );
      }
    });
}
