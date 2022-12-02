
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc'|'desc';

function getAverageValue(value: number[]): number {
  return value.reduce((a, b) => a + b) / value.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? [...students].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? [...students].sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : [...students].sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    default:
      return order === 'asc'
        ? [...students]
          .sort((a, b) => getAverageValue(a.grades) - getAverageValue(b.grades))
        : [...students]
          .sort(
            (a, b) => getAverageValue(b.grades) - getAverageValue(a.grades),
          );
  }
}
