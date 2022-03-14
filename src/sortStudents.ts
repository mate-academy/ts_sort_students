
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'decs';

export function avg(grades: number[]): number {
  return grades.reduce((acc, cur) => acc + cur) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    const first = order === 'asc' ? a : b;
    const second = order === 'asc' ? b : a;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return first[sortBy].localeCompare(second[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return <number>first[sortBy] - <number>second[sortBy];

      case SortType.AverageGrade:
        return avg(first.grades) - avg(second.grades);

      default:
        return 0;
    }
  });
}
