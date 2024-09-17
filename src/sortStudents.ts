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
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? (Number(a[sortBy]) - Number(b[sortBy]))
          : (Number(b[sortBy]) - Number(a[sortBy]));
      case SortType.AverageGrade:
        return order === 'asc'
          ? (getAvg(a[sortBy]) - getAvg(b[sortBy]))
          : (getAvg(b[sortBy]) - getAvg(a[sortBy]));
      default:
        return order === 'asc'
          ? (String(a[sortBy]).localeCompare(String(b[sortBy])))
          : (String(b[sortBy]).localeCompare(String(a[sortBy])));
    }
  });
}
