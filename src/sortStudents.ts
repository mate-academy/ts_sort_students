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

function findAverage(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const copy = [...students];

  copy.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc' ? 1 : -1) * a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc' ? 1 : -1) * (+a[sortBy] - +b[sortBy]);

      case SortType.AverageGrade:
        return (
          (order === 'asc' ? 1 : -1)
          * (findAverage(a.grades) - findAverage(b.grades))
        );

      default:
        throw new Error(`Error, ${sortBy} not valid`);
    }
  });

  return copy;
}
