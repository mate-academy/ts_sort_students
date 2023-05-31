
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
  AverageGrade = 'averagegrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function avgGrades(grades: number[]): number {
    return grades
      .reduce((prev, curr) => prev + curr, 0)
      / grades.length;
  }
  type Simple = number|string|boolean;

  function compare(a: Simple, b: Simple):number {
    if (a > b) {
      return 1;
    }

    return a === b
      ? 0
      : -1;
  }

  if (sortBy === SortType.AverageGrade) {
    return [
      ...students]
      .sort((a: Student, b: Student) => (order === 'asc'
        ? compare(avgGrades(a.grades), avgGrades(b.grades))
        : compare(avgGrades(b.grades), avgGrades(a.grades))));
  }

  return [
    ...students]
    .sort((a: Student, b: Student) => (order === 'asc'
      ? compare(a[sortBy], b[sortBy])
      : compare(b[sortBy], a[sortBy])));
}
