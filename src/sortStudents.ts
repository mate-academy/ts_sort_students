// import { type } from 'os';

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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(grades: number[]): number {
  const sum = grades.reduce((acc, el) => acc + el, 0);

  return sum / grades.length;
}

function sortByAverageGrade(a: Student, b: Student, order: SortOrder): number {
  const avgGradesA = calculateAverageGrade(a.grades);
  const avgGradesB = calculateAverageGrade(b.grades);

  return order === 'asc'
    ? avgGradesA - avgGradesB
    : avgGradesB - avgGradesA;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];

  switch (sortBy) {
    case SortType.AverageGrade:
      return result.sort((a, b) => sortByAverageGrade(a, b, order));
    case SortType.Married:
      return result.sort((a, b) => {
        if (a.married && !b.married) {
          return order === 'asc'
            ? 1
            : -1;
        }

        if (!a.married && b.married) {
          return order === 'asc'
            ? -1
            : 1;
        }

        return 0;
      });
    case SortType.Age:

      return result
        .sort((a, b) => (
          order === 'asc'
            ? a.age - b.age
            : b.age - a.age));
    case SortType.Name:
      return result
        .sort((a, b) => (
          order === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)));
    case SortType.Surname:
      return result
        .sort((a, b) => (
          order === 'asc'
            ? a.surname.localeCompare(b.surname)
            : b.surname.localeCompare(a.surname)
        ));
    default:
      return students;
  }
}
