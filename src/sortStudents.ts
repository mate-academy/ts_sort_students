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
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let avgA;
    let avgB;

    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name) * (order === 'asc' ? 1 : -1);
      case SortType.Surname:
        return a.surname.localeCompare(b.surname) * (order === 'asc' ? 1 : -1);
      case SortType.Age:
        return (a.age - b.age) * (order === 'asc' ? 1 : -1);
      case SortType.Married:
        if (a.married && !b.married) {
          return order === 'asc' ? 1 : -1;
        }

        if (!a.married && b.married) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      case SortType.AverageGrade:
        avgA = a.grades.reduce((sum, grade) => sum + grade, 0)
        / a.grades.length;

        avgB = b.grades.reduce((sum, grade) => sum + grade, 0)
        / b.grades.length;

        return (avgA - avgB) * (order === 'asc' ? 1 : -1);
      default:
        return a.name.localeCompare(b.name) * (order === 'asc' ? 1 : -1);
    }
  });

  return sortedStudents;
}
