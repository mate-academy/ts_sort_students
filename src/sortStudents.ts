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

function getAverageGrade({ grades }: Student): number {
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
        return a.name.localeCompare(b.name) * orderDirection;

      case SortType.Surname:
        return a.surname.localeCompare(b.surname) * orderDirection;

      case SortType.Age:
        return (a.age - b.age) * orderDirection;

      case SortType.Married:
        return (+a.married - +b.married) * orderDirection;

      case SortType.AverageGrade:
        return (getAverageGrade(a) - getAverageGrade(b)) * orderDirection;

      default:
        return 0;
    }
  });
}
