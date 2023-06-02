
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function calculateAverage(grades: number[]): number {
  const sum = grades.reduce((prev, item) => prev + item, 0);

  return sum / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.AverageGrade:
        return order === 'asc'
          ? calculateAverage(a[sortBy]) - calculateAverage(b[sortBy])
          : calculateAverage(b[sortBy]) - calculateAverage(a[sortBy]);
      default:
        return 0;
    }
  });
}
