
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'NAME',
  Surname = 'SURNAME',
  Age = 'AGE',
  Married = 'MARRIED',
  AverageGrade = 'AVERAGE_GRADE',
}

export type SortOrder = 'asc' | 'desc';

function getAverage(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((acc, curr) => acc + curr, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    let valA: string | number | boolean;
    let valB: string | number | boolean;

    if (sortBy === SortType.AverageGrade) {
      valA = getAverage(a.grades);
      valB = getAverage(b.grades);
    } else {
      const key = (sortBy.charAt(0).toLowerCase()
        + sortBy.slice(1).toLowerCase()) as keyof Student;

      const rawA = a[key];
      const rawB = b[key];

      if (Array.isArray(rawA) || Array.isArray(rawB)) {
        return 0;
      }

      valA = rawA;
      valB = rawB;
    }

    if (valA === valB) {
      return 0;
    }

    if (order === 'asc') {
      return valA > valB ? 1 : -1;
    }

    return valA < valB ? 1 : -1;
  });
}
