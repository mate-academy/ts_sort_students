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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  return students.slice().sort((a, b) => {
    let aValue,
      bValue;

    if (sortBy === SortType.Name) {
      aValue = a.name;
      bValue = b.name;
    } else if (sortBy === SortType.Surname) {
      aValue = a.surname;
      bValue = b.surname;
    } else if (sortBy === SortType.Age) {
      aValue = a.age;
      bValue = b.age;
    } else if (sortBy === SortType.Married) {
      aValue = a.married ? 1 : 0;
      bValue = b.married ? 1 : 0;
    } else if (sortBy === SortType.AverageGrade) {
      aValue = a.grades.reduce((sum, grade) => sum + grade, 0)
       / a.grades.length;

      bValue = b.grades.reduce((sum, grade) => sum + grade, 0)
       / b.grades.length;
    }

    if (order === 'asc') {
      if (aValue === bValue || aValue === undefined || bValue === undefined) {
        return 0;
      }

      return aValue < bValue ? -1 : 1;
    }

    if (aValue === bValue || aValue === undefined || bValue === undefined) {
      return 0;
    }

    return aValue < bValue ? 1 : -1;
  });
}
