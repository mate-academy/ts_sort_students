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

export function getAverage(data: number[]): number {
  const result = data.reduce(
    (sum, current) => sum + current, 0,
  );

  return result / data.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));
      break;
    case SortType.Married:
    case SortType.Age:
      copyStudents.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;
    case SortType.AverageGrade:
      copyStudents.sort((a, b) => {
        return order === 'asc'
          ? getAverage(a[sortBy]) - getAverage(b[sortBy])
          : getAverage(b[sortBy]) - getAverage(a[sortBy]);
      });
      break;
    default:
      break;
  }

  return copyStudents;
}
