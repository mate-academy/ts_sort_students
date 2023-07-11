
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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortOrder: number = order === 'asc' ? 1 : -1;
  const copyStudents = [...students];

  function findAverageGrade(grades: number[]): number {
    return grades.reduce((sum, curr) => sum + curr) / grades.length;
  }

  copyStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sortOrder * a[sortBy].localeCompare(b[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return sortOrder * ((+a[sortBy]) - (+b[sortBy]));
      case SortType.AverageGrade:
        return sortOrder
        * (findAverageGrade(a.grades) - findAverageGrade(b.grades));
      default:
        throw new Error('Invalid SortType');
    }
  });

  return copyStudents;
}
