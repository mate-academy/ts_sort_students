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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? studentA.name.localeCompare(studentB.name)
          : studentB.name.localeCompare(studentA.name);

      case SortType.Surname:
        return order === 'asc'
          ? studentA.surname.localeCompare(studentB.surname)
          : studentB.surname.localeCompare(studentA.surname);
      case SortType.Age:
        return order === 'asc'
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;
      case SortType.Married:
        return order === 'asc'
          ? Number(studentA.married) - Number(studentB.married)
          : Number(studentB.married) - Number(studentA.married);

      case SortType.AverageGrade:
      {
        const callback: (
          acc: number,
          grade: number,
          index: number,
          arr: number[]
        ) => number = (acc: number, grade: number, index, arr) => {
          return acc + grade / arr.length;
        };

        return order === 'asc'
          ? studentA.grades.reduce(callback, 0)
          - studentB.grades.reduce(callback, 0)
          : studentB.grades.reduce(callback, 0)
          - studentA.grades.reduce(callback, 0);
      }
      default:
        return 0;
    }
  });
}
