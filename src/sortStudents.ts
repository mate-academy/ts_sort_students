
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

function getAverage(numbers: number[]): number {
  return numbers.reduce((sum: number, num: number) => sum + num, 0)
  / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student): number => {
    const firstAverage = getAverage(a[SortType.AverageGrade]);
    const secondAverage = getAverage(b[SortType.AverageGrade]);

    switch (sortBy) {
      case SortType.Married:
      case SortType.Age:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? firstAverage - secondAverage
          : secondAverage - firstAverage;

      default:
        throw new Error('Not a valid SortType');
    }
  });
}
