
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

// eslint-disable-next-line
function getAverage(arr: number[]) {
  return arr.reduce((acc: number, cur: number) => acc + cur) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copiedStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copiedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copiedStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copiedStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copiedStudents.sort((a, b) => getAverage(a[sortBy])
          - getAverage(b[sortBy]))

        : copiedStudents.sort((a, b) => getAverage(b[sortBy])
          - getAverage(a[sortBy]));
    default:
      throw new Error('Error');
  }
}
