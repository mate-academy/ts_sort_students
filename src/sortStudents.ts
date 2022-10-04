export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: object[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const studentsCopy = [...students];

  if (order === 'asc') {
    if (sortBy === 'grades') {
      studentsCopy.sort((a, b) => (
        (a[sortBy].reduce((sum, current) => sum + current) / a[sortBy].length)
        - (b[sortBy].reduce((sum, current) => sum + current) / b[sortBy].length)
      ));
    }

    if (sortBy === 'name' || sortBy === 'surname') {
      studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    } else {
      studentsCopy.sort((a, b) => a[sortBy] - b[sortBy]);
    }
  } else if (order === 'desc') {
    if (sortBy === 'grades') {
      studentsCopy.sort((a, b) => (
        (b[sortBy].reduce((sum, current) => sum + current) / b[sortBy].length)
        - (a[sortBy].reduce((sum, current) => sum + current) / a[sortBy].length)
      ));
    }

    if (sortBy === 'name' || sortBy === 'surname') {
      studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    } else {
      studentsCopy.sort((a, b) => b[sortBy] - a[sortBy]);
    }
  }

  return studentsCopy;
}
