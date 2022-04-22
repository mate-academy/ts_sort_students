
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function aveGrade(arr: number[]): number {
  return arr.reduce((sum, grad) => sum + grad) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      return (order === 'asc')
        ? copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? copy.sort((a, b) => +(a[sortBy]) - +(b[sortBy]))
        : copy.sort((a, b) => +(b[sortBy]) - +(a[sortBy]));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copy.sort((a, b) => aveGrade(a.grades) - aveGrade(b.grades))
        : copy.sort((a, b) => aveGrade(b.grades) - aveGrade(a.grades));

    default: break;
  }

  return copy;
}
