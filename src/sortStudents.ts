/* eslint-disable no-case-declarations */
/* eslint-disable no-nested-ternary */
/* eslint-disable default-case */
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

function calculateAverageGrades(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const sortedStudents = students.slice();

  sortedStudents.sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
        comparison = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        comparison = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        comparison = a.age - b.age;
        break;
      case SortType.Married:
        comparison = a.married === b.married ? 0 : a.married ? 1 : -1;
        break;
      case SortType.AverageGrade:
        const avgA = calculateAverageGrades(a.grades);
        const avgB = calculateAverageGrades(b.grades);

        comparison = avgA - avgB;
        break;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}
