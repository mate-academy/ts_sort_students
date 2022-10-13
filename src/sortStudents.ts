export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function gradesSort(
  a: Student,
  b: Student,
  order: SortOrder,
  sortBy: SortType,
): number {
  return order === 'asc'
    ? (a[sortBy].reduce((sum: number, current: number) => sum + current)
        / a[sortBy].length)
      - (b[sortBy].reduce((sum: number, current: number) => sum + current)
        / b[sortBy].length)
    : (b[sortBy].reduce((sum: number, current: number) => sum + current)
        / b[sortBy].length)
      - (a[sortBy].reduce((sum: number, current: number) => sum + current)
        / a[sortBy].length);
}

function stringSort(a: string, b: string, order: SortOrder): number {
  return order === 'asc'
    ? a.localeCompare(b)
    : b.localeCompare(a);
}

function numberSort(a: number, b: number, order: SortOrder): number {
  return order === 'asc'
    ? a - b
    : b - a;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((a: Student, b: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return stringSort(a[sortBy], b[sortBy], order);

        case SortType.AverageGrade:
          return gradesSort(a, b, order, sortBy);

        default:
          return numberSort(a[sortBy], b[sortBy], order);
      }
    });
}
