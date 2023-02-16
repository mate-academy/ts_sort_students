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

export function average(arg: number[]): number {
  return arg.reduce((acc, num) => (acc + num), 0) / arg.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'desc'
          ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'desc'
          ? +b[sortBy] - +a[sortBy]
          : +a[sortBy] - +b[sortBy];

      case SortType.AverageGrade:
        return order === 'desc'
          ? average(b[sortBy]) - average(a[sortBy])
          : average(a[sortBy]) - average(b[sortBy]);

      default:
        throw new Error('Error');
    }
  });
}
