
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean
  grades: [number];
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

function calculateAverageGrades(array: number[]): number {
  return array.reduce((acc, n) => acc + n, 0) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      return order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]);
    }

    if (sortBy === SortType.Age || sortBy === SortType.Married) {
      return order === 'asc'
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy]);
    }

    if (sortBy === SortType.AverageGrade) {
      const aAverage = calculateAverageGrades(a[sortBy]);
      const bAverage = calculateAverageGrades(b[sortBy]);

      return order === 'asc'
        ? aAverage - bAverage
        : bAverage - aAverage;
    }

    return 0;
  });
}
