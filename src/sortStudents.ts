
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  // write your function

  const studentsCopy: Student[] = [...students];

  return studentsCopy.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:

        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        if (order === 'desc') {
          return b[sortBy].localeCompare(a[sortBy]);
        }
        break;

      case SortType.Age:
        if (order === 'asc') {
          return a[sortBy] - b[sortBy];
        }

        if (order === 'desc') {
          return b[sortBy] - a[sortBy];
        }
        break;

      case SortType.Married:
        if (order === 'asc') {
          return Number(a[sortBy]) - Number(b[sortBy]);
        }

        if (order === 'desc') {
          return Number(b[sortBy]) - Number(a[sortBy]);
        }

        break;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return a[sortBy]
            .reduce((c: number, d: number) => (c + d)) / a[sortBy].length
          - b[sortBy]
            .reduce((c: number, d: number) => (c + d)) / b[sortBy].length;
        }

        if (order === 'desc') {
          return b[sortBy]
            .reduce((c: number, d: number) => (c + d)) / b[sortBy].length
          - a[sortBy]
            .reduce((c: number, d: number) => (c + d)) / a[sortBy].length;
        }

        break;

      default:
        return 0;
    }

    return 0;
  });
}
