
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

function calculateAverageGrade(student: Student): number {
  return student.grades.reduce(
    (sum: number, x: number) => (sum + x), 0,
  ) / student.grades.length;
}

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
          compareValue = Number(a.married !== b.married);
        } else if (a.married) {
          compareValue = Number(a.married !== b.married);
        } else {
          compareValue = Number(a.married === b.married);
        }
        break;

      case SortType.AverageGrade:
        avgGradeA = calculateAverageGrade(a);

        avgGradeB = calculateAverageGrade(b);

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
