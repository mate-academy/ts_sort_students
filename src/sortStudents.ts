
export interface Student {
  name: string;
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
  AverageGrade = 'average',
}

export type SortOrder = 'asc' | 'desc';

function byName(a, b, order, sortBy): number {
  return order === 'asc'
    ? a[sortBy].localeCompare(b[sortBy])
    : b[sortBy].localeCompare(a[sortBy]);
}

function byNumbers(a, b, order, sortBy): number {
  return order === 'asc'
    ? +a[sortBy] - +b[sortBy]
    : +b[sortBy] - +a[sortBy];
}

function averageGrade(array: number[]): number {
  return array.reduce((a: number, b: number): number => {
    return a + b;
  }, 0) / array.length;
}

function byAverage(a, b, order): number {
  const prev = averageGrade(a.grades);
  const next = averageGrade(b.grades);

  return order === 'asc'
    ? prev - next
    : next - prev;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sorted: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sorted.sort((a, b): number => byName(a, b, order, sortBy));
      break;

    case SortType.Age:
    case SortType.Married:
      sorted.sort((a, b): number => byNumbers(a, b, order, sortBy));
      break;

    case SortType.AverageGrade:
      sorted.sort((a, b): number => byAverage(a, b, order));
      break;

    default: break;
  }

  return sorted;
}
