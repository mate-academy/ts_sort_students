export enum SortType {
  Name = 'name',
  Surname = 'surname',
  AverageGrade = 'averageGrade',
  Age = 'age',
  Married = 'married',
}

export interface Student {
  name: string;
  married: boolean;
  grades: number[];
  surname: string;
  age: number;
}

export type SortOrder = 'asc' | 'desc';

const average = (grades: number[]):number => grades
  .reduce((a, b) => a + b, 0) / grades.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    if (sortBy === SortType.AverageGrade) {
      if (average(a.grades) > average(b.grades)) {
        return order === 'asc' ? 1 : -1;
      }

      if (average(a.grades) < average(b.grades)) {
        return order === 'asc' ? -1 : 1;
      }

      return 0;
    }

    if (a[sortBy] > b[sortBy]) {
      return order === 'asc' ? 1 : -1;
    }

    if (a[sortBy] < b[sortBy]) {
      return order === 'asc' ? -1 : 1;
    }

    return 0;
  });
}
