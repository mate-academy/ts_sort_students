
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

function getAverage(grades: number[]): number {
  return (
    grades.reduce((sum: number, num: number) => sum + num, 0)
    / grades.length
  );
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studCopy: Student[] = [...students];

  return studCopy.sort((a, b): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
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
          ? getAverage(a[sortBy]) - getAverage(b[sortBy])
          : getAverage(b[sortBy]) - getAverage(a[sortBy]);
      default:
        throw new Error('Sorting failed. Not a valid sort type');
    }
  });
}
