
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
  return [...students].sort((a, b) => {
    let current = a;
    let next = b;

    if (order === 'desc') {
      current = b;
      next = a;
    }

    switch (sortBy) {
      case 'name':
      case 'surname':
        return current[sortBy].localeCompare(next[sortBy]);

      case 'age':
        return current[sortBy] - next[sortBy];

      case 'married':
        return +current[sortBy] - +next[sortBy];

      case 'grades':
        return (current[sortBy].reduce((sum, value) => sum + value, 0)
        / current[sortBy].length)

        - (next[sortBy].reduce((sum, value) => sum + value, 0)
        / next[sortBy].length);

      default:
        throw Error('error');
    }
  });
}
