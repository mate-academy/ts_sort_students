
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
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
        const avgGradeA = getAverageGrade(a.grades);
        const avgGradeB = getAverageGrade(b.grades);

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
