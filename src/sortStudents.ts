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
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student): number => {
    const averageGradeA: number = a.grades.reduce(
      (acc: number, grade: number) => acc + grade,
    ) / a.grades.length;
    const averageGradeB: number = b.grades.reduce(
      (acc: number, grade: number) => acc + grade,
    ) / b.grades.length;
    const marriedA = a.married ? 1 : 0;
    const marriedB = b.married ? 1 : 0;

    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      case SortType.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      case SortType.Married:
        return order === 'asc'
          ? marriedA - marriedB
          : marriedB - marriedA;
      case SortType.AverageGrade:
        return order === 'asc'
          ? averageGradeA - averageGradeB
          : averageGradeB - averageGradeA;
      default:
        return 0;
    }
  });
}
