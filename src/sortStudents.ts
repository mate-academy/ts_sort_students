function getAvg(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((a, b) => a + b) / arr.length;
}

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
): Student[] | string {
  return [...students].sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +studentA[sortBy] - +studentB[sortBy]
          : +studentB[sortBy] - +studentA[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAvg(studentA[sortBy]) - getAvg(studentB[sortBy])
          : getAvg(studentB[sortBy]) - getAvg(studentA[sortBy]);

      default:
        throw new Error('Define sort parameters');
    }
  });
}
