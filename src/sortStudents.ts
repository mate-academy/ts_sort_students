export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'SortByAverageGrades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAverage = (numbers: number[]): number => {
  return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  sortOrder: SortOrder,
): Student[] {
  return [...students].sort((aEl, bEl) => {
    const a = sortOrder === 'asc'
      ? aEl
      : bEl;
    const b = sortOrder === 'asc'
      ? bEl
      : aEl;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
        return a[sortBy] - b[sortBy];

      case SortType.Married:
        return Number(a[sortBy]) - Number(b[sortBy]);

      case SortType.AverageGrade:
        return getAverage(a.grades) - getAverage(b.grades);

      default:
        throw Error(`Key: (${sortBy}) not exist`);
    }
  });
}
