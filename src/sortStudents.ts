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

function averageGrade(numbers: number[]): number {
  const sum = [...numbers].reduce((acc: number, current: number) => {
    return acc + current;
  }, 0);

  return sum / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];
  const ascending = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copiedStudents.sort(
        (a, b) => {
          return ascending
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);
        },
      );

    case SortType.Married:
    case SortType.Age:
      return copiedStudents.sort(
        (a, b) => {
          return ascending
            ? +a[sortBy] - +b[sortBy]
            : +b[sortBy] - +a[sortBy];
        },
      );

    case SortType.AverageGrade:
      return copiedStudents.sort(
        (a, b) => {
          return ascending
            ? averageGrade(a[sortBy]) - averageGrade(b[sortBy])
            : averageGrade(b[sortBy]) - averageGrade(a[sortBy]);
        },
      );

    default:
      return copiedStudents;
  }
}
