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

function getAverageGrade(grades: number[]): number {
  return grades.reduce(
    (sum: number, grade: number) => sum + grade, 0,
  ) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const orderDirection = order === 'asc' ? 1 : -1;

  return [...students].sort((a, b): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]) * orderDirection;

      case SortType.Age:
      case SortType.Married:
        return (+a[sortBy] - +b[sortBy]) * orderDirection;

      case SortType.AverageGrade:
        return (
          getAverageGrade(a.grades) - getAverageGrade(b.grades)
        ) * orderDirection;

      default:
        return 0;
    }
  });
}
