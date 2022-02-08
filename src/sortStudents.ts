
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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sorted = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sorted.sort((a, b) => {
        if (order === 'desc') {
          return b[sortBy].localeCompare(a[sortBy]);
        }

        return a[sortBy].localeCompare(b[sortBy]);
      });
      break;

    case SortType.Age:
      sorted.sort((a, b) => {
        if (order === 'asc') {
          return a[sortBy] - b[sortBy];
        }

        return b[sortBy] - a[sortBy];
      });
      break;

    case SortType.Married:
      sorted.sort((a, b) => {
        if (a[sortBy] === b[sortBy]) {
          return 0;
        }

        if (order === 'desc') {
          return a[sortBy] ? -1 : 1;
        }

        return a[sortBy] ? 1 : -1;
      });
      break;

    case SortType.AverageGrade:
      sorted.sort((a, b) => {
        const average1 = a[sortBy].reduce((prev, next) => prev + next)
        / a[sortBy].length;
        const average2 = b[sortBy].reduce((prev, next) => prev + next)
        / b[sortBy].length;

        if (order === 'asc') {
          return average1 - average2;
        }

        return average2 - average1;
      });
      break;

    default:
      break;
  }

  return sorted;
}
