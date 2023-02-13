
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  // write your function
  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
      default:
        return [...students].sort((a, b) => a.name.localeCompare(b.name));
      case SortType.Surname:
        return [...students].sort((a, b) => a.surname.localeCompare(b.surname));
      case SortType.Age:
        return [...students].sort((a, b) => a.age - b.age);
      case SortType.Married:
        return [...students].sort((a, b) => +a.married - +b.married);
      case SortType.AverageGrade:
        return [...students].sort((a, b) => (a.grades.reduce((x, y) => x + y, 0)
          / a.grades.length)
          - (b.grades.reduce((m, n) => m + n, 0) / b.grades.length));
    }
  }

  switch (sortBy) {
    case SortType.Name:
    default:
      return [...students].sort((a, b) => b.name.localeCompare(a.name));
    case SortType.Surname:
      return [...students].sort((a, b) => b.surname.localeCompare(a.surname));
    case SortType.Age:
      return [...students].sort((a, b) => b.age - a.age);
    case SortType.Married:
      return [...students].sort((a, b) => +b.married - +a.married);
    case SortType.AverageGrade:
      return [...students].sort((a, b) => (b.grades.reduce((x, y) => x + y, 0)
        / b.grades.length)
        - (a.grades.reduce((m, n) => m + n, 0) / a.grades.length));
  }
}
