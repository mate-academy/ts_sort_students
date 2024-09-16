function getAverage(array: number[]): number {
  const sum = array.reduce((a: number, b: number) => a + b);

  return sum / array.length;
}

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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((a: Student, b: Student): number => {
      let sortResult = 0;

      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          sortResult = a[sortBy].localeCompare(b[sortBy]);
          break;

        case SortType.Age:
        case SortType.Married:
          sortResult = +a[sortBy] - +b[sortBy];
          break;

        case SortType.AverageGrade:
          sortResult = getAverage(a[sortBy]) - getAverage(b[sortBy]);
          break;

        default:
          return 0;
      }

      return order === 'desc' ? -sortResult : sortResult;
    });
}
