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

const getAverage = (value : number[]) : number => value
  .reduce((prev, curr) => prev + curr, 0) / value.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      case SortType.AverageGrade: {
        return order === 'asc'
          ? getAverage(a[sortBy]) - getAverage(b[sortBy])
          : getAverage(b[sortBy]) - getAverage(a[sortBy]);
      }

      default:
        return 0;
    }
  });
}
