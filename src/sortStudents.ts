
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function avarage(arr: number[]): number {
  const sum = arr.reduce((a, b) => a + b);

  return sum / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const resultArr = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? resultArr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : resultArr.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? resultArr.sort((a, b) => +a[sortBy] - +b[sortBy])
        : resultArr.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? resultArr.sort((a, b) => avarage(a.grades) - avarage(b.grades))
        : resultArr.sort((a, b) => avarage(b.grades) - avarage(a.grades));
    default:
      return resultArr;
  }
}
