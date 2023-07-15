
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student): number => {
    if (sortBy === 'grades') {
      const aAverage = a[sortBy]
        .reduce((sum: number, num: number): number => sum + num)
        / a[sortBy].length;

      const bAverage = b[sortBy]
        .reduce((sum: number, num: number): number => sum + num)
        / b[sortBy].length;

      return order === 'asc' ? (aAverage - bAverage) : (bAverage - aAverage);
    }

    if (typeof a[sortBy] !== 'string') {
      return order === 'asc'
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy]);
    }

    return order === 'asc'
      ? String(a[sortBy]).localeCompare(String(b[sortBy]))
      : String(b[sortBy]).localeCompare(String(a[sortBy]));
  });
}
