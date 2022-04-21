
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

function average(array: number[]): number {
  return array.reduce((sum, num) => sum + num, 0) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? result.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : result.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Married:
    case SortType.Age:
      return (order === 'asc')
        ? result.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : result.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.AverageGrade:
      return result.sort((a, b) => {
        return (order === 'asc')
          ? average(a[sortBy]) - average(b[sortBy])
          : average(b[sortBy]) - average(a[sortBy]);
      });

    default:
      return students;
  }
}
