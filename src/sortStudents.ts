
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

function AverageNumber(array: number[]): number {
  return array.reduce((sum, value) => sum + value, 0) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((current, next) => {
    switch (sortBy) {
      case 'name':
      case 'surname':
        return current[sortBy].localeCompare(next[sortBy]);

      case 'age':
        return order === 'asc' ? current[sortBy] - next[sortBy]
          : next[sortBy] - current[sortBy];

      case 'married':
        return order === 'asc' ? +current[sortBy] - +next[sortBy]
          : +next[sortBy] - +current[sortBy];

      case 'grades':
        return order === 'asc'
          ? AverageNumber(current[sortBy]) - AverageNumber(next[sortBy])
          : AverageNumber(next[sortBy]) - AverageNumber(current[sortBy]);

      default:
        throw Error('error');
    }
  });
}
