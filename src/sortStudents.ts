
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

function calculateAvgerage(grades: number[]): number {
  const totalGrades: number
    = grades.reduce((a: number, b: number) => (
      a + b));

  return totalGrades / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const result: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return result.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
      return result.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.Married:
      return result.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      });

    case SortType.AverageGrade:
      return result.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? calculateAvgerage(a[sortBy]) - calculateAvgerage(b[sortBy])
          : calculateAvgerage(b[sortBy]) - calculateAvgerage(a[sortBy]);
      });

    default:
      return [];
  }
}
