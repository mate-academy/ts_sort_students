
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

  const sum = grades.reduce((acc, grade) => acc + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];
  let avgGradeA: number,
    avgGradeB: number;

  sortedStudents.sort((a, b) => {
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
        avgGradeA = calculateAverage(a.grades);
        avgGradeB = calculateAverage(b.grades);
        comparison = avgGradeA - avgGradeB;
        break;
      default:
        break;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}
