
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

export function getAverageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    return order === 'asc'
      ? studentsCopy.sort(
        (current, next) => current[sortBy].localeCompare(next[sortBy]),
      )
      : studentsCopy.sort(
        (current, next) => next[sortBy].localeCompare(current[sortBy]),
      );
  }

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    return order === 'asc'
      ? studentsCopy.sort(
        (current, next) => +current[sortBy] - +next[sortBy],
      )
      : studentsCopy.sort(
        (current, next) => +next[sortBy] - +current[sortBy],
      );
  }

  if (sortBy === SortType.AverageGrade) {
    return studentsCopy.sort((current, next) => (
      order === 'asc'
        ? getAverageGrade(current.grades) - getAverageGrade(next.grades)
        : getAverageGrade(next.grades) - getAverageGrade(current.grades)
    ));
  }

  return studentsCopy;
}
