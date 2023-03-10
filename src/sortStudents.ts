
export interface Student {
  name: string,
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

function calculateAverageGrade({ grades }: Student): number {
  return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((prev: Student, curr: Student) => {
    switch (sortBy) {
      case SortType.AverageGrade:
        return order === 'asc'
          ? calculateAverageGrade(prev) - calculateAverageGrade(curr)
          : calculateAverageGrade(curr) - calculateAverageGrade(prev);
      case SortType.Age:
        return order === 'asc'
          ? +prev[sortBy] - +curr[sortBy]
          : +curr[sortBy] - +prev[sortBy];
      case SortType.Married:
        return order === 'asc'
          ? +prev[sortBy] - +curr[sortBy]
          : +curr[sortBy] - +prev[sortBy];
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? prev[sortBy].localeCompare(curr[sortBy])
          : curr[sortBy].localeCompare(prev[sortBy]);
      default:
        throw new Error('Set another type');
    }
  });
}
