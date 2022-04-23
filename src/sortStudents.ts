
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
  Married ='married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function average(array: number[]): number {
  return array.reduce((sum, x) => sum + x) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const arr = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? arr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : arr.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? arr.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : arr.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
    case SortType.AverageGrade:
      return (order === 'asc')
        ? arr.sort((a, b) => average(a[sortBy]) - average(b[sortBy]))
        : arr.sort((a, b) => average(b[sortBy]) - average(a[sortBy]));

    default:
      throw new Error('Unexpected value!');
  }
}
