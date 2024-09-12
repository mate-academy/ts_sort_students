
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

export function GetAverageGrade({ grades }: Student): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const checkSortOrder = order === 'asc' ? 1 : -1;

  return [...students].sort((student1: Student, student2: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return student1[sortBy].localeCompare(
          student2[sortBy],
        ) * checkSortOrder;

      case SortType.Age:
      case SortType.Married:
        return (
          +student1[sortBy] - +student2[sortBy]
        ) * checkSortOrder;

      default:
        return (
          GetAverageGrade(student1) - GetAverageGrade(student2)
        ) * checkSortOrder;
    }
  });
}
