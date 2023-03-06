
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
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
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a: Student, b: Student) => {
    let compareValue: number;
    let avgGradeA: number;
    let avgGradeB: number;

    switch (sortBy) {
      case SortType.Name:
        compareValue = a.name.localeCompare(b.name);
        break;

      case SortType.Surname:
        compareValue = a.surname.localeCompare(b.surname);
        break;

      case SortType.Age:
        compareValue = a.age - b.age;
        break;

      case SortType.Married:
        if (a.married === b.married) {
          compareValue = 0;
        } else if (a.married) {
          compareValue = 1;
        } else {
          compareValue = -1;
        }
        break;

      case SortType.AverageGrade:
        avgGradeA = a.grades.reduce(
          (sum: number, x: number) => (sum + x), 0,
        ) / a.grades.length;

        avgGradeB = b.grades.reduce(
          (sum: number, x: number) => (sum + x), 0,
        ) / b.grades.length;

        if (avgGradeA === avgGradeB) {
          compareValue = 0;
        } else if (avgGradeA > avgGradeB) {
          compareValue = 1;
        } else {
          compareValue = -1;
        }

        break;

      default:
        throw new Error('Invalid SortType');
    }

    if (order === 'asc') {
      return compareValue;
    }

    return -compareValue;
  });

  return sortedStudents;
}
