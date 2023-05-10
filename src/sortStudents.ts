
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: []
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

function findAverage(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr) / arr.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copiedStudents.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));
      break;
    case SortType.Married:
    case SortType.Age:
      copiedStudents.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;
    case SortType.AverageGrade:
      copiedStudents.sort((a, b) => {
        return order === 'asc'
          ? findAverage(a[sortBy]) - findAverage(b[sortBy])
          : findAverage(b[sortBy]) - findAverage(a[sortBy]);
      });
      break;
    default:
      break;
  }

  return copiedStudents;
}
