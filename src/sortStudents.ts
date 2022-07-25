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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];

  const getAverage = (array: number[]): number => array
    .reduce((sum, item) => sum + item, 0) / array.length;

  result.sort((first, second) => {
    let a = first;
    let b = second;

    if (order === 'desc') {
      a = second;
      b = first;
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
        return a[sortBy] - b[sortBy];

      case SortType.Married:
        return Number(a[sortBy]) - Number(b[sortBy]);

      case SortType.AverageGrade:
        return getAverage(a[sortBy]) - getAverage(b[sortBy]);

      default:
        return 0;
    }
  });

  return result;
}
