
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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageNum(arr: number[]): number {
  return arr.reduce((sum: number, a: number) => sum + a, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      return studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Surname:
      if (order === 'asc') {
        return studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      return studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
      return studentsCopy.sort((a, b) => b[sortBy] - a[sortBy]);

    case SortType.Married:
      return studentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return studentsCopy.sort((a, b) => {
          return getAverageNum(a[sortBy]) - getAverageNum(b[sortBy]);
        });
      }

      if (order === 'desc') {
        return studentsCopy.sort((a, b) => {
          return getAverageNum(b[sortBy]) - getAverageNum(a[sortBy]);
        });
      }

      break;

    default:
      return studentsCopy;
  }

  return studentsCopy;
}
