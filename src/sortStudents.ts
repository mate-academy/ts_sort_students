
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

function calcAvgGrade(grades: number[]): number {
  if (!grades.length) {
    return 0;
  }

  const sum = grades.reduce((acc, curr) => acc + curr);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const compareFunction = (a: Student, b: Student): number => {
    let result = 0;

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
        result = +a.married - +b.married;
        break;
      case SortType.AverageGrade:
        {
          const avgGradeA = calcAvgGrade(a.grades);
          const avgGradeB = calcAvgGrade(b.grades);

          result = avgGradeA - avgGradeB;
        }
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
