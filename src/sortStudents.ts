
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, el) => sum + el) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    const firstAverageGrade = getAverageGrade(a.grades);
    const secondAverageGrade = getAverageGrade(b.grades);

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.AverageGrade:
        return (order === 'asc')
          ? firstAverageGrade - secondAverageGrade
          : secondAverageGrade - firstAverageGrade;

      default:
        return (order === 'asc')
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
    }
  });
}
