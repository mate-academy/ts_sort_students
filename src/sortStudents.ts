
export interface Student {
  name: string,
  surname: string;
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

export type SortOrder = 'asc' | 'desc';

export function getAvaregeGrade(grades: number[]): number {
  return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    let studentA = a;
    let studentB = b;

    if (order === 'desc') {
      [studentA, studentB] = [studentB, studentA];
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return studentA[sortBy].localeCompare(studentB[sortBy]);

      case SortType.Age:
        return studentA.age - studentB.age;

      case SortType.Married:
        return +studentA.married - +studentB.married;

      case SortType.AverageGrade:
        return getAvaregeGrade(studentA.grades)
        - getAvaregeGrade(studentB.grades);

      default:
        return 0;
    }
  });
}
