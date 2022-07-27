
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
  AverageGrade = 'sortByAverages'
}

export type SortOrder = 'asc' | 'desc';

const getAverage = (nums: number[]): number => {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((aEl, bEl) => {
    const a = order === 'asc'
      ? aEl
      : bEl;
    const b = order === 'asc'
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
