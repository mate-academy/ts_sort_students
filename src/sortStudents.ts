
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function stringSort(a: string, b: string, order: SortOrder) :number {
  return order === 'asc'
    ? a.localeCompare(b)
    : b.localeCompare(a);
}

function numberSort(a: number, b: number, order: SortOrder) :number {
  return order === 'asc'
    ? a - b
    : b - a;
}

function gradeAverage(a: number[]): number {
  return a.reduce((x, y) => x + y, 0) / a.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return [...students]
        .sort((a, b) => stringSort(a[sortBy], b[sortBy], order));

    case SortType.AverageGrade:
      return [...students]
        .sort((a, b) => numberSort(gradeAverage(a[sortBy]),
          gradeAverage(b[sortBy]), order));

    case SortType.Married:
    case SortType.Age:
      return [...students]
        .sort((a, b) => numberSort(+a[sortBy], +b[sortBy], order));

    default:
      throw new Error('Error: invalid data');
  }
}
