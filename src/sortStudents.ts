
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

function getGrade(grades: number[]): number {
  return grades.reduce((a: number, b: number) => a + b) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order:SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Surname:
      case SortType.Name:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getGrade(a[sortBy]) - getGrade(b[sortBy])
          : getGrade(b[sortBy]) - getGrade(a[sortBy]);

      default:
        return 0;
    }
  });
}
