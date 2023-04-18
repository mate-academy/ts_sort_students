
export interface Student {
  name: string,
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade({ grades }: Student): number {
  const everage = grades.reduce((sum: number, grade: number) => sum + grade)
    / grades.length;

  return everage;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const isAsc: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((a: Student, b: Student): number => (isAsc
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])));
      break;

    case SortType.Married:
    case SortType.Age:
      studentsCopy.sort((a, b) => (isAsc
        ? a[sortBy] - b[sortBy]
        : b[sortBy] - a[sortBy]));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((a: Student, b: Student): number => (isAsc
        ? getAverageGrade(a) - getAverageGrade(b)
        : getAverageGrade(b) - getAverageGrade(a)));
      break;

    default:
      break;
  }

  return studentsCopy;
}
