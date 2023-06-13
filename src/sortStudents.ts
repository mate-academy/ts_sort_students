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

function calculateAverageGrade(grades: number[]): number {
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
    let aValue;
    let bValue;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
      case SortType.Age:
      case SortType.Married:
        aValue = a[sortBy];
        bValue = b[sortBy];
        break;

      case SortType.AverageGrade:
        aValue = calculateAverageGrade(a.grades);
        bValue = calculateAverageGrade(b.grades);
        break;

      default:
        throw new Error('Invalid SortType');
    }

    if (aValue < bValue) {
      return order === 'asc' ? -1 : 1;
    }

    if (aValue > bValue) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  });

  return sortedStudents;
}
