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

function getAvg(grades: number[]): number {
  return grades.reduce((sum, current) => sum + current) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortOrder: number = order === 'asc' ? 1 : -1;

  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return sortOrder * (Number(a[sortBy]) - Number(b[sortBy]));
      case SortType.AverageGrade:
        return sortOrder * (getAvg(a[sortBy]) - getAvg(b[sortBy]));
      default:
        return sortOrder * (String(a[sortBy]).localeCompare(String(b[sortBy])));
    }
  });
}
