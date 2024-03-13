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
    if (sortBy === SortType.Name) {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      }

      return b.name.localeCompare(a.name);
    }

    if (sortBy === SortType.Surname) {
      if (order === 'asc') {
        return a.surname.localeCompare(b.surname);
      }

      return b.surname.localeCompare(a.surname);
    }

    if (sortBy === SortType.Age) {
      if (order === 'asc') {
        return a.age - b.age;
      }

      return b.age - a.age;
    }

    if (sortBy === SortType.Married) {
      if (a.married && !b.married) {
        return order === 'asc' ? 1 : -1;
      }

      if (!a.married && b.married) {
        return order === 'asc' ? -1 : 1;
      }

      return 0;
    }

    if (sortBy === SortType.AverageGrade) {
      const avgA = a.grades.reduce((sum, grade) => sum + grade, 0)
      / a.grades.length;
      const avgB = b.grades.reduce((sum, grade) => sum + grade, 0)
      / b.grades.length;

      if (order === 'asc') {
        return avgA - avgB;
      }

      return avgB - avgA;
    }

    if (order === 'asc') {
      return a.name.localeCompare(b.name);
    }

    return b.name.localeCompare(a.name);
  });

  return sortedStudents;
}
