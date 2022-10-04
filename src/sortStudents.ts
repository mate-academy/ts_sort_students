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

function getAverage(arr: number[]): number {
  return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.AverageGrade:
      return copyStudents.sort((a, b) => (order === 'asc'
        ? getAverage(a.grades) - getAverage(b.grades)
        : getAverage(b.grades) - getAverage(a.grades)
      ));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyStudents.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : copyStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    default: throw new Error('Got wrong parameter');
  }
}
