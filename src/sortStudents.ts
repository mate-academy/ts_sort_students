
function getAverage(arr: number[]): number {
  const sum: number = arr.reduce(
    (prev: number, num: number) => prev + num,
  );

  return sum / arr.length;
}

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
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
  return [...students].sort(
    (a: Student, b: Student): number => {
      let sortNum = 0;

      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          sortNum = a[sortBy].localeCompare(b[sortBy]);
          break;

        case SortType.Age:
        case SortType.Married:
          sortNum = +a[sortBy] - +b[sortBy];
          break;

        case SortType.AverageGrade:
          sortNum = getAverage(a[sortBy]) - getAverage(b[sortBy]);
          break;

        default:
          return 0;
      }

      if (order === 'desc' && sortNum !== 0) {
        return -sortNum;
      }

      return sortNum;
    },
  );
}
