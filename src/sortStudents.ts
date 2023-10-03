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

  const sum = grades.reduce((acc, grade) => acc + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let avgGradeA: number;
    let avgGradeB: number;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.AverageGrade:
        avgGradeA = calculateAverageGrade(a.grades);
        avgGradeB = calculateAverageGrade(b.grades);

        return order === 'asc'
          ? avgGradeA - avgGradeB
          : avgGradeB - avgGradeA;

      default:
        return 0;
    }
  });

  return sortedStudents;
}
