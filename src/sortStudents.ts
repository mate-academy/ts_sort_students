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

const average = (arr: number[]): number => {
  return arr.reduce((acc, el) => acc + el, 0) / arr.length;
};

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const clone = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? clone.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : clone.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? clone.sort((a, b) => +a[sortBy] - +b[sortBy])
        : clone.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? clone.sort((a, b) => average(a[sortBy]) - average(b[sortBy]))
        : clone.sort((a, b) => average(b[sortBy]) - average(a[sortBy]));

    default:
      break;
  }

  return clone;
}
