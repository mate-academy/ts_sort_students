
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

export function getAverageGrade({ grades }: Student): number {
  return grades.reduce((acc, current) => acc + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((a: Student, b: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return a[sortBy].localeCompare(b[sortBy]);

        case SortType.Age:
          return order === 'asc'
            ? a.age - b.age
            : b.age - a.age;

        case SortType.Married:
          return Number(b.married) - Number(a.married);

        case SortType.AverageGrade:
          return order === 'asc'
            ? getAverageGrade(a) - getAverageGrade(b)
            : getAverageGrade(b) - getAverageGrade(a);

        default:
          return 0;
      }
    });
}
