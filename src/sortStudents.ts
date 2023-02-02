
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function avarageGrade(arr: number[]): number {
  return arr.reduce((a2: number, b2: number) => a2 + b2, 0)
    / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.AverageGrade:
        return order === 'asc'
          ? avarageGrade(a[sortBy]) - avarageGrade(b[sortBy])
          : avarageGrade(b[sortBy]) - avarageGrade(a[sortBy]);

      case SortType.Surname:
      case SortType.Name:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      default:
        return order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
    }
  });
}
