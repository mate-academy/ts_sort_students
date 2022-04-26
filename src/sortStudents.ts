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
  function averageGrad(arr: number[]): number {
    return arr.reduce((a: number, b: number): number => a + b) / arr.length;
  }

  const result = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? result.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : result.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? result.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : result.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? result.sort((a, b) => averageGrad(a.grades) - averageGrad(b.grades))
        : result.sort((a, b) => {
          return averageGrad(b.grades) - averageGrad(a.grades);
        });

    default:
      return result;
  }
}
