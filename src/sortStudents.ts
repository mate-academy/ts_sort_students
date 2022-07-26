
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

export type SortOrder = 'desc' | 'asc';

function getAverageGrade(arrGrades: number[]): number {
  return arrGrades.reduce((prev, curr) => prev + curr) / arrGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
        return order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];

      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      default: {
        return order === 'asc'
          ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
          : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]);
      }
    }
  });
}
