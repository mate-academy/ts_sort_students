
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

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((accum, grade) => accum + grade, 0)
    / grades.length;
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
        return studentA.name.localeCompare(studentB.name);

      case SortType.Surname:
        return studentA.surname.localeCompare(studentB.surname);

      case SortType.Age:
        return studentA.age - studentB.age;

      case SortType.Married:
        return Number(studentA.married) - Number(studentB.married);

      case SortType.AverageGrade:
        return getAverageGrade(studentA.grades)
          - getAverageGrade(studentB.grades);

      default:
        return studentA.name.localeCompare(studentB.name);
    }
  });
}
