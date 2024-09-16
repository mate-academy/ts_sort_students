
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  return sortedStudents.sort((a, b) => {
    const aValue = sortBy === SortType.AverageGrade
      ? a[sortBy].reduce((prev, curr) => prev + curr) / a[sortBy].length
      : a[sortBy];
    const bValue = sortBy === SortType.AverageGrade
      ? b[sortBy].reduce((prev, curr) => prev + curr) / b[sortBy].length
      : b[sortBy];

    if (aValue > bValue) {
      return order === 'asc' ? 1 : -1;
    }

    if (aValue < bValue) {
      return order === 'asc' ? -1 : 1;
    }

    return 0;
  });
}
