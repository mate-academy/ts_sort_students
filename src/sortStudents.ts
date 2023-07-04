
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | number {
  const allStudents = [...students];

  function findAverage(array: number[]): number {
    return array.reduce((sum, curr) => sum + curr) / array.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? allStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : allStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? allStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : allStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);
    case SortType.AverageGrade:
      return order === 'asc'
        ? allStudents.sort((a, b) => (
          findAverage(a[sortBy])
          - findAverage(b[sortBy])
        ))
        : allStudents.sort((a, b) => (
          findAverage(b[sortBy])
          - findAverage(a[sortBy])
        ));
    default:
      return 0;
  }
}
