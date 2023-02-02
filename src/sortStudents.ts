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

const averageAge = (item: number[]): number => {
  return item.reduce((x, y) => x + y) / item.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | string {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return [...students].sort((a, b): number => {
        return (order === 'desc')
          ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return [...students].sort((a, b): number => {
        return (order === 'desc')
          ? +b[sortBy] - +a[sortBy]
          : +a[sortBy] - +b[sortBy];
      });

    case SortType.AverageGrade:
      return [...students].sort((a, b): number => {
        return (order === 'desc')
          ? averageAge(b[sortBy]) - averageAge(a[sortBy])
          : averageAge(a[sortBy]) - averageAge(b[sortBy]);
      });

    default: return [...students];
  }
}
