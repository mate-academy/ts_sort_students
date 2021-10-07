export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
  averageGrades: number,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrades',
}

export type SortOrder = 'asc' | 'desc';

function avgGrade({ grades }: Student): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((s, a) => s + a, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student): number => {
    const sign = (order === 'desc') ? -1 : 1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sign * a[sortBy].localeCompare(b[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return sign * (Number(a[sortBy]) - Number(b[sortBy]));
      case SortType.AverageGrade:
        return sign * (avgGrade(a) - avgGrade(b));
      default:
        return 0;
    }
  });
}
