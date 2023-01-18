
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

export type SortOrder = 'asc' | 'desc';

const getAverage = (grades: number[]): number => {
  const sum = grades.reduce((a: number, b: number): number => a + b, 0);

  return sum / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

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
        ? studentsCopy.sort((a, b) => (
          getAverage(a[sortBy]) - getAverage(b[sortBy])))
        : studentsCopy.sort((a, b) => (
          getAverage(b[sortBy]) - getAverage(a[sortBy])));

    default:
      throw new Error('Invalid parameters');
  }
}
