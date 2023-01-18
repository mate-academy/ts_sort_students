
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return [...students].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      return [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.AverageGrade:
      if (order === 'asc') {
        return [...students]
          .sort((a, b) => (a[sortBy].reduce((x, y) => x + y, 0)
          / a[sortBy].length)
          - (b[sortBy].reduce((x, y) => x + y, 0) / b[sortBy].length));
      }

      return [...students]
        .sort((a, b) => (b[sortBy].reduce((x, y) => x + y, 0)
        / b[sortBy].length)
        - (a[sortBy].reduce((x, y) => x + y, 0) / a[sortBy].length));

    default:
      if (order === 'asc') {
        return [...students].sort((a, b) => +a[sortBy] - +b[sortBy]);
      }

      return [...students].sort((a, b) => +b[sortBy] - +a[sortBy]);
  }
}
