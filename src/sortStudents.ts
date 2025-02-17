
export interface Student {
  name: string,
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function getAverageGrades(arr: number[]): number {
  const sum = arr.reduce((prev, curr) => prev + curr, 0);

  return sum / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents.sort((a, b) => (order === 'asc'
        ? +a[sortBy] - +b[sortBy]
        : +b[sortBy] - +a[sortBy]
      ));
      break;

    case SortType.AverageGrade:
      copyStudents.sort((a, b) => (order === 'asc'
        ? getAverageGrades(a[sortBy]) - getAverageGrades(b[sortBy])
        : getAverageGrades(b[sortBy]) - getAverageGrades(a[sortBy])
      ));
      break;

    default:
      throw new Error('Invalid data');
  }

  return copyStudents;
}
