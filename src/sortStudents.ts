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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function average(item: number[]): number {
  return item.reduce((a, b) => a + b) / item.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const direction: number = (order === 'asc') ? 1 : -1;

  return [...students].sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (a[sortBy].localeCompare(b[sortBy]) * direction);

      case SortType.Age:
      case SortType.Married:
        return ((Number(a[sortBy]) - Number(b[sortBy])) * direction);

      case SortType.AverageGrade:
        return ((average(a.grades) - average(b.grades)) * direction);

      default:
        return 0;
    }
  });
}
