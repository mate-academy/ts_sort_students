/* eslint-disable max-len */

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: true,
  grades: number[],
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

function calculateAverage(grades: number[]): number {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      copiedStudents.sort((a, b) => (order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
      break;
    case SortType.Surname:
      copiedStudents.sort((a, b) => (order === 'asc' ? a.surname.localeCompare(b.surname) : b.surname.localeCompare(a.surname)));
      break;
    case SortType.Age:
      copiedStudents.sort((a, b) => (order === 'asc' ? a.age - b.age : b.age - a.age));
      break;
    case SortType.Married:
      copiedStudents.sort((a, b) => {
        const marriedA = a.married ? 1 : 0;
        const marriedB = b.married ? 1 : 0;

        return order === 'asc' ? marriedA - marriedB : marriedB - marriedA;
      });
      break;
    case SortType.AverageGrade:
      copiedStudents.sort((a, b) => {
        const averageA = calculateAverage(a.grades);
        const averageB = calculateAverage(b.grades);

        return order === 'asc' ? averageA - averageB : averageB - averageA;
      });
      break;
    default:
      break;
  }

  return copiedStudents;
}
