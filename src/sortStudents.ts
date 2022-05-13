
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function averageValue(list: number[]): number {
  return list.reduce((sum, value) => sum + value, 0) / list.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  switch (sortBy) {
    case 'age':
      return order === 'asc'
        ? [...students]
          .sort((prev, next) => prev[sortBy] - next[sortBy])
        : [...students]
          .sort((prev, next) => next[sortBy] - prev[sortBy]);
    case 'married':
      return [...students]
        .sort((prev, next) => {
          if (prev[sortBy] === next[sortBy]) {
            return 0;
          }

          if (prev[sortBy]) {
            return -1;
          }

          return 1;
        });
    case 'grades':
      return order === 'asc'
        ? [...students].sort((prev, next) => {
          return averageValue(prev[sortBy]) - averageValue(next[sortBy]);
        })
        : [...students].sort((prev, next) => {
          return averageValue(next[sortBy]) - averageValue(prev[sortBy]);
        });
    default:
      return order === 'asc'
        ? [...students]
          .sort((prev, next) => String(prev[sortBy]).toLowerCase()
            .localeCompare(String(next[sortBy]).toLowerCase()))
        : [...students]
          .sort((prev, next) => String(next[sortBy]).toLowerCase()
            .localeCompare(String(prev[sortBy]).toLowerCase()));
  }
}
