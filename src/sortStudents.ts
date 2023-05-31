
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

const getAverageGrade = (arr: number[]): number => {
  return arr.reduce((sum: number, mark: number) => sum + mark) / arr.length;
};

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Array<object>,
  sortBy: SortType,
  order: SortOrder,
): Array<object> {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case 'name':
      case 'surname':
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case 'age':
      case 'married':
        return (order === 'asc')
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      case 'grades':
        return (order === 'asc')
          ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
          : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]);

      default:
        return 0;
    }
  });
}
