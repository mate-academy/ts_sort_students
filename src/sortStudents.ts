
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  people: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | string {
  const students = [...people];

  function calcAverage(list: number[]): number {
    return list.reduce((acc, curr) => acc + curr, 0) / list.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'desc'
        ? students.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
        : students.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'desc'
        ? students.sort((a, b) => +b[sortBy] - +a[sortBy])
        : students.sort((a, b) => +a[sortBy] - +b[sortBy]);

    case SortType.AverageGrade:
      return order === 'desc'
        ? students.sort((a, b) => {
          return calcAverage(b.grades) - calcAverage(a.grades);
        })
        : students.sort((a, b) => {
          return calcAverage(a.grades) - calcAverage(b.grades);
        });
    default:
      return 'No matches!!!';
  }
}
