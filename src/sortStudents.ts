
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades
    .reduce((acc: number, grade: number) => acc + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  function sortCallback(a: Student, b: Student): number {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return +a[sortBy] - +b[sortBy];
      case SortType.AverageGrade:
        return getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy]);
      default:
        return 0;
    }
  }

  return order === 'asc'
    ? sortedStudents.sort((a, b) => sortCallback(a, b))
    : sortedStudents.sort((a, b) => sortCallback(b, a));
}
