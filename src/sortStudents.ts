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

function averageGrade(numbers: number[]): number {
  return numbers.reduce((sum: number, grade: number) => sum + grade, 0)
  / numbers.length;
}

function sortByOrder(a: number | boolean, b: number | boolean,
  order: SortOrder): number {
  return order === 'asc'
    ? a - b
    : b - a;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copiedStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copiedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return copiedStudents
        .sort((a, b) => sortByOrder(a[sortBy], b[sortBy], order));
    case SortType.AverageGrade:
      return copiedStudents.sort((a, b) => sortByOrder(averageGrade(a[sortBy]),
        averageGrade(b[sortBy]), order));
    default:
      return students;
  }
}
