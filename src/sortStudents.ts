
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

function getAverageGrade(numbers: number[]): number {
  const average = numbers
    .reduce((start: number, sum: number) => start + sum, 0)
    / numbers.length;

  return average;
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
      if (order === 'asc') {
        return result.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      return result.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return result.sort((a, b) => +a[sortBy] - +b[sortBy]);
      }

      return result.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return result
          .sort((a, b) => getAverageGrade(a[sortBy])
          - getAverageGrade(b[sortBy]));
      }

      return result
        .sort((a, b) => getAverageGrade(b[sortBy])
        - getAverageGrade(a[sortBy]));

    default:
      break;
  }

  return result;
}
