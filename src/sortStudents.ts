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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  function calculateAverage(array: number[]): number {
    return array.reduce((sum, el) => sum + el) / array.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : sortedStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);
    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedStudents.sort(
          (a, b) => calculateAverage(a[sortBy]) - calculateAverage(b[sortBy]),
        )
        : sortedStudents.sort(
          (a, b) => calculateAverage(b[sortBy]) - calculateAverage(a[sortBy]),
        );
    default:
      throw new Error('Error...');
  }
}
