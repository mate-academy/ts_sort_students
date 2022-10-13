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

function calcAvg(arr: number[]): number {
  return arr.reduce((x, y) => x + y, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => calcAvg(a.grades) - calcAvg(b.grades))
        : sortedStudents.sort((a, b) => calcAvg(b.grades) - calcAvg(a.grades));
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : sortedStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    default:
      return sortedStudents;
  }
}
