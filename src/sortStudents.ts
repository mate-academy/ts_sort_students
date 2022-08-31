export interface Student {
  name: string,
  surname: string,
  age: number,
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  const average = (array: number[]): number => array
    .reduce((total: number, item: number) => total + item, 0) / array.length;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy
          .sort((prev, next) => prev[sortBy].localeCompare(next[sortBy]))
        : studentsCopy
          .sort((prev, next) => next[sortBy].localeCompare(prev[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((prev, next) => +prev[sortBy] - +next[sortBy])
        : studentsCopy.sort((prev, next) => +next[sortBy] - +prev[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy
          .sort((prev, next) => average(prev.grades) - average(next.grades))
        : studentsCopy
          .sort((prev, next) => average(next.grades) - average(prev.grades));

    default:
      return students;
  }
}
