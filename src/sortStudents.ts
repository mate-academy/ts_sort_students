
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

export type SortOrder = 'asc' | 'desc';

export function getAvarage(arr: number[]): number {
  const sum = arr.reduce((acc: number, curr: number) => acc + curr, 0);

  return sum / arr.length;
}

export function sortStudents(
  students: Array<Student>, sortBy: SortType, order: SortOrder,
): Array<Student> {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : sortedStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedStudents.sort((a, b) => {
          return getAvarage(a[sortBy]) - getAvarage(b[sortBy]);
        })
        : sortedStudents.sort((a, b) => {
          return getAvarage(b[sortBy]) - getAvarage(a[sortBy]);
        });

    default:
      return sortedStudents;
  }
}
