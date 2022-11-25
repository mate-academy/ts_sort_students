
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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student): number => {
    const firstAverage = a[SortType.AverageGrade]
      .reduce((acc, value) => acc + value, 0)
    / a[SortType.AverageGrade].length;
    const secondAverage = b[SortType.AverageGrade]
      .reduce((acc, value) => acc + value, 0)
    / b[SortType.AverageGrade].length;

    switch (sortBy) {
      case SortType.Married:
        if (order === 'asc') {
          return Number(a[SortType.Married]) - Number(b[SortType.Married]);
        }

        return Number(b[SortType.Married]) - Number(a[SortType.Married]);

      case SortType.Name:
        if (order === 'asc') {
          return a[SortType.Name].localeCompare(b[SortType.Name]);
        }

        return b[SortType.Name].localeCompare(a[SortType.Name]);

      case SortType.Surname:
        if (order === 'asc') {
          return a[SortType.Surname].localeCompare(b[SortType.Surname]);
        }

        return b[SortType.Surname].localeCompare(a[SortType.Surname]);

      case SortType.Age:
        if (order === 'asc') {
          return a[SortType.Age] - b[SortType.Age];
        }

        return b[SortType.Age] - a[SortType.Age];

      default:
        if (order === 'asc') {
          return firstAverage - secondAverage;
        }

        return secondAverage - firstAverage;
    }
  });
}
