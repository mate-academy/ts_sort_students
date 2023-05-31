
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

function calculateAverage(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((total, grade) => total + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];
  const callback = function getCallback(a: Student, b: Student): number {
    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);

      case SortType.Surname:
        return a.surname.localeCompare(b.surname);

      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case SortType.AverageGrade: {
        const avgGradeA = calculateAverage(a.grades);
        const avgGradeB = calculateAverage(b.grades);

        return order === 'asc'
          ? avgGradeA - avgGradeB
          : avgGradeB - avgGradeA;
      }

      case SortType.Married:
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);

      default:
        return 0;
    }
  };

  return copiedStudents.sort(callback);
}
