
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
    let avgGradeA = 0;
    let avgGradeB = 0;

    switch (sortBy) {
      case SortType.Name:
        result = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        result = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        result = a.age - b.age;
        break;
      case SortType.Married:
        if (a.married === b.married) {
          result = 0;
        } else if (a.married) {
          result = 1;
        } else {
          result = -1;
        }

        break;
      case SortType.AverageGrade:
        avgGradeA = a.grades.reduce((acc, curr) => {
          return acc + curr;
        }) / a.grades.length;

        avgGradeB = b.grades.reduce((acc, curr) => {
          return acc + curr;
        }) / b.grades.length;

        result = avgGradeA - avgGradeB;
        break;
      default:
        break;
    }

    if (order === 'desc') {
      result *= -1;
    }

    return result === 0 ? students.indexOf(a) - students.indexOf(b) : result;
  };

  return [...students].sort(compareFunction);
}
