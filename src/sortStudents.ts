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
  const clone = [...students];

  function calculateAverageGrade(grades: number[]): number {
    return grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
  }

  clone.sort((a: Student, b: Student) => {
    const avgGradeA = calculateAverageGrade(a.grades);
    const avgGradeB = calculateAverageGrade(b.grades);

    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
        comparison = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        comparison = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        comparison = a.age - b.age;
        break;
      case SortType.Married:
        if (a.married === b.married) {
          comparison = 0;
        } else if (a.married) {
          comparison = 1;
        } else {
          comparison = -1;
        }
        break;
      case SortType.AverageGrade:
        comparison = avgGradeA - avgGradeB;
        break;
      default:
        return 0;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return clone;
}
