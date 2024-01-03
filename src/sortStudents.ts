export interface Student {
  name: string
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function calculateAverage(grades: number[]): number {
  const sum = grades.reduce((a, b) => a + b, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  const sorting = (a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return +a[sortBy] - +b[sortBy];

      case SortType.AverageGrade:
        return calculateAverage(a.grades) - calculateAverage(b.grades);

      default:
        return 0;
    }
  };

  return order === 'asc'
    ? copyStudents.sort((a: Student, b: Student) => sorting(a, b))
    : copyStudents.sort((a: Student, b: Student) => sorting(b, a));
}
