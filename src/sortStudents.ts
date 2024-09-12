
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function average(grades: number[]): number {
  return grades.reduce((sum, x) => sum + (x / grades.length), 0);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = students.filter(() => true);

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copy.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copy.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((a, b) => average(a[sortBy]) - average(b[sortBy]))
        : copy.sort((a, b) => average(b[sortBy]) - average(a[sortBy]));

    default:
      return copy;
  }
}
