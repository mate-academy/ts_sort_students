
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

function getAverageGrade(averageGrade: number[]): number {
  return averageGrade
    .reduce((sum: number, current: number) => sum + current, 0)
    / averageGrade.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyStudents.sort((a, b) => -a[sortBy].localeCompare(b[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents.sort((a, b) => {
          return getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy]);
        })
        : copyStudents.sort((a, b) => {
          return getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]);
        });

    default:
      throw new Error('Sort type didn/t find');
  }
}
