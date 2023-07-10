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
  const compareFunction = (a: Student, b: Student): number => {
    let result = 0;
    let avgGradeA: number;
    let avgGradeB: number;

    switch (sortBy) {
      case SortType.Name:
        result = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        result = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        result = order === 'asc' ? a.age - b.age : b.age - a.age;
        break;
      case SortType.Married:
        result = order === 'asc'
          ? +a.married - +b.married : +b.married - +a.married;
        break;
      case SortType.AverageGrade:
        avgGradeA = a.grades.reduce((sum, grade) => sum
        + grade, 0) / a.grades.length;

        avgGradeB = b.grades.reduce((sum, grade) => sum
        + grade, 0) / b.grades.length;

        result = order === 'asc' ? avgGradeA
        - avgGradeB : avgGradeB - avgGradeA;
        break;
      default:
        break;
    }

    return result;
  };

  return [...students].sort(compareFunction);
}
