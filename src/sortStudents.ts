
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

function calculateAverageGrade(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades
    .reduce((acc: number, grade: number): number => acc + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((student1, student2) => {
    let result: number = 0;

    switch (sortBy) {
      case SortType.Name:
        result = student1.name.localeCompare(student2.name);
        break;

      case SortType.Surname:
        result = student1.surname.localeCompare(student2.surname);
        break;

      case SortType.Age:
        result = student1.age - student2.age;
        break;

      case SortType.Married:
        if (student1.married === student2.married) {
          result = 0;
        }

        if (student1.married) {
          result = 1;
        }

        if (student2.married) {
          result = -1;
        }
        break;

      case SortType.AverageGrade:

        result = calculateAverageGrade(student1.grades)
          - calculateAverageGrade(student2.grades);
        break;

      default:
        throw new Error('Cannot sort that data type');
    }

    if (order === 'desc') {
      result *= -1;
    }

    return result;
  });
}
