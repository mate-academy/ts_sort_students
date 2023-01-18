
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: [];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];
  const getMark = (
    grades: number[],
  ): number => grades.reduce((a, b) => a + b, 0) / grades.length;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => +a[sortBy] - +b[sortBy])
        : studentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => getMark(a[sortBy]) - getMark(b[sortBy]))
        : studentsCopy.sort((a, b) => getMark(b[sortBy]) - getMark(a[sortBy]));

    default:
      return students;
  }
}
