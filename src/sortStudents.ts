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
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  if (order === 'asc') {
    switch (sortBy) {
      case 'name':
      case 'surname':
        return [...students].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      case 'age':
      case 'married':
        return [...students].sort((a, b) => +a[sortBy] - +b[sortBy]);
      case 'grades':
      default:
        return [...students].sort((a, b) => (a.grades.reduce((x, y) => x + y, 0)
          / a.grades.length)
          - (b.grades.reduce((m, n) => m + n, 0) / b.grades.length));
    }
  }

  switch (sortBy) {
    case 'name':
    case 'surname':
      return [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    case 'age':
    case 'married':
      return [...students].sort((a, b) => +b[sortBy] - +a[sortBy]);
    case 'grades':
    default:
      return [...students].sort((a, b) => (b.grades.reduce((x, y) => x + y, 0)
        / b.grades.length)
        - (a.grades.reduce((m, n) => m + n, 0) / a.grades.length));
  }
}
