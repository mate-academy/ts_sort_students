
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
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
      case SortType.Surname:
        comparison = a[sortBy].localeCompare(b[sortBy]);
        break;
      case SortType.Age:
        comparison = a.age - b.age;
        break;
      case SortType.Married:
        comparison = Number(a.married) - Number(b.married);
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
