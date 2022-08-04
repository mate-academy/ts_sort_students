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
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.Age:
      if (order === 'asc') {
        return [...students].sort((a, b) => a.age - b.age);
      }

      return [...students].sort((a, b) => b.age - a.age);
    case SortType.Name:
      return [...students].sort((a, b) => a.name.localeCompare(b.name));
    case SortType.Surname:
      if (order === 'asc') {
        return [...students].sort((a, b) => a.surname.localeCompare(b.surname));
      }

      return [...students].sort((a, b) => b.surname.localeCompare(a.surname));
    case SortType.Married:
      return [...students]
        .sort((x, y) => Number(y.married) - Number(x.married));
    case SortType.AverageGrade:
      if (order === 'asc') {
        return [...students].sort(
          (a, b) => a.grades.reduce((sum, x) => sum + x, 0) / a.grades.length
            - b.grades.reduce((sum, x) => sum + x, 0) / b.grades.length,
        );
      }

      return [...students].sort(
        (a, b) => b.grades.reduce((sum, x) => sum + x, 0) / b.grades.length
            - a.grades.reduce((sum, x) => sum + x, 0) / a.grades.length,
      );
    default:
      break;
  }

  return students;
}
