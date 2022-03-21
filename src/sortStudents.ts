
export interface Student {
  name: string,
  surname: string;
  age: number,
  married: boolean,
  grades: number[] | [],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function getAvaregeGrade(grades: number[]): number {
  return grades.reduce((acc, curr) => acc + curr) / grades.length;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    let studentA = a;
    let studentB = b;

    if (order === 'desc') {
      [studentA, studentB] = [studentB, studentA];
    }

    if (sortBy === SortType.Name) {
      return studentA.name.localeCompare(studentB.name);
    }

    if (sortBy === SortType.Surname) {
      return studentA.surname.localeCompare(studentB.surname);
    }

    if (sortBy === SortType.Age) {
      return studentA.age - studentB.age;
    }

    if (sortBy === SortType.Married) {
      return +studentA.married - +studentB.married;
    }

    if (sortBy === SortType.AverageGrade) {
      return getAvaregeGrade(studentA.grades)
      - getAvaregeGrade(studentB.grades);
    }

    return 0;
  });
}
