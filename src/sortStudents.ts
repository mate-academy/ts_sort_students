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
  const studentsCopy: Student[] = [...students];

  studentsCopy.sort((a: Student, b: Student): number => {
    let comparison: number = 0;

    if (sortBy === SortType.Name) {
      comparison = a.name.localeCompare(b.name);
    }

    if (sortBy === SortType.Surname) {
      comparison = a.surname.localeCompare(b.surname);
    }

    if (sortBy === SortType.Age) {
      comparison = a.age - b.age;
    }

    if (sortBy === SortType.Married) {
      comparison = Number(a.married) - Number(b.married);
    }

    if (sortBy === SortType.AverageGrade) {
      const averageA: number = a.grades.reduce(
        (sum: number, grade: number): number => sum + grade,
        0,
      ) / a.grades.length;

      const averageB: number = b.grades.reduce(
        (sum: number, grade: number): number => sum + grade,
        0,
      ) / b.grades.length;

      comparison = averageA - averageB;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return studentsCopy;
}
