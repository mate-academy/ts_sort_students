/* eslint-disable max-len */

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

function averageGrade(student: Student): number {
  return student.grades.reduce((sum, currentGrade) => (
    sum + currentGrade
  ), 0) / student.grades.length;
}

export function sortStudents(students: Student[], sortType: SortType, order: SortOrder): Student[] {
  return students.slice().sort((a, b) => {
    switch (sortType) {
      case SortType.Name:
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);
      case SortType.Surname:
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        return b.surname.localeCompare(a.surname);
      case SortType.Age:
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;

      case SortType.Married:

        if (a.married === b.married) {
          return 0;
        }

        if (a.married === undefined || b.married === undefined) {
          return a.married === undefined ? 1 : -1;
        }

        return a.married ? -1 : 1;
      case SortType.AverageGrade:
        if (order === 'asc') {
          return averageGrade(a) - averageGrade(b);
        }

        return averageGrade(b) - averageGrade(a);

      default:
        throw new Error('Invalid sort type');
    }
  });
}
