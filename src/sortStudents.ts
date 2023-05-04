
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

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((a, b) => {
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudents.sort((a, b) => {
        if (order === 'asc') {
          return Number(a[sortBy]) - Number(b[sortBy]);
        }

        return Number(b[sortBy]) - Number(a[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((a, b) => {
        const averageA = a[sortBy]
          .reduce((x, y) => x + y, 0) / a[sortBy].length;
        const averageB = b[sortBy]
          .reduce((x, y) => x + y, 0) / b[sortBy].length;

        if (order === 'asc') {
          return averageA - averageB;
        }

        return averageB - averageA;
      });
      break;
    default:
      break;
  }

  return sortedStudents;
}
