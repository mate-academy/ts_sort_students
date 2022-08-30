
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

export type SortOrder = 'asc' | 'desc';

const averageGrade = (grades: number[]): number => {
  return grades.reduce((prev, next) => prev + next, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((prev, curr) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? prev[sortBy].localeCompare(curr[sortBy])
          : curr[sortBy].localeCompare(prev[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +prev[sortBy] - +curr[sortBy]
          : +curr[sortBy] - +prev[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? averageGrade(prev[sortBy]) - averageGrade(curr[sortBy])
          : averageGrade(curr[sortBy]) - averageGrade(prev[sortBy]);

      default:
        return Infinity;
    }
  });
}
