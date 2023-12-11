/* eslint-disable no-case-declarations */
export interface Student {
  name: string
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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverage(grades: number[]): number {
  const sum = grades.reduce((a, b) => a + b, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
        return order === 'asc' ? a.age - b.age : b.age - a.age;

      case SortType.Married:
        const sortOrder = order === 'asc' ? 1 : -1;

        if (a.married !== b.married) {
          return a.married ? sortOrder : -sortOrder;
        }

        return 0;
      case SortType.AverageGrade:
        const averageA = calculateAverage(a.grades);
        const averageB = calculateAverage(b.grades);

        return order === 'asc' ? averageA - averageB : averageB - averageA;
      default:
        return 0;
    }
  });

  return sortedStudents;
}
