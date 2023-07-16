
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverage(data: number[]): number {
  const sum = data.reduce((acc: number, curr: number) => acc + curr, 0);

  return (sum / data.length) || 0;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((a: Student, b: Student) => {
      const sortDirection = order === 'asc'
        ? 1
        : -1;

      const aAverageGrade = sortBy === SortType.AverageGrade
        ? calculateAverage(a[sortBy] as number[])
        : 0;

      const bAverageGrade = sortBy === SortType.AverageGrade
        ? calculateAverage(b[sortBy] as number[])
        : 0;

      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return sortDirection * String(a[sortBy])
            .localeCompare(String(b[sortBy]));

        case SortType.Age:
          return sortDirection * (Number(a[sortBy]) - Number(b[sortBy]));

        case SortType.Married:
          return sortDirection * (+a[sortBy] - +b[sortBy]);

        case SortType.AverageGrade:

          return sortDirection * (aAverageGrade - bAverageGrade);

        default:
          return 0;
      }
    });
}
