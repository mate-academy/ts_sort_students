
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? [...students].sort((a, b) => a.name.localeCompare(b.name))
        : [...students].sort((a, b) => b.name.localeCompare(a.name));

    case (SortType.Surname):
      return order === 'asc'
        ? [...students].sort((a, b) => a.surname.localeCompare(b.surname))
        : [...students].sort((a, b) => b.surname.localeCompare(a.surname));

    case (SortType.Age):
      return order === 'asc'
        ? [...students].sort((a, b) => a.age - b.age)
        : [...students].sort((a, b) => b.age - a.age);

    case (SortType.Married):
      return order === 'asc'
        ? [...students].sort((a, b) => +a.married - +b.married)
        : [...students].sort((a, b) => +b.married - +a.married);

    default:
      return order === 'asc'
        ? [...students].sort((a, b) => a.grades.reduce((sum, x) => sum + x, 0)
        / a.grades.length - b.grades.reduce((sum, x) => sum + x, 0)
        / b.grades.length)
        : [...students].sort((a, b) => b.grades.reduce((sum, x) => sum + x, 0)
        / b.grades.length - a.grades.reduce((sum, x) => sum + x, 0)
        / a.grades.length);
  }
}
