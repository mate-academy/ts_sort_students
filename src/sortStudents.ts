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
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aValue;
    let bValue;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        aValue = a[sortBy];
        bValue = b[sortBy];

        return order === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);

      case SortType.Age:
      case SortType.Married:
        aValue = a[sortBy] as number;
        bValue = b[sortBy] as number;

        return order === 'asc'
          ? aValue - bValue
          : bValue - aValue;

      case SortType.AverageGrade:
        aValue = a.grades.reduce((sum, grade) => sum + grade, 0)
        / a.grades.length;

        bValue = b.grades.reduce((sum, grade) => sum + grade, 0)
        / b.grades.length;

        return order === 'asc' ? aValue - bValue : bValue - aValue;

      default:
        return 0;
    }
  });

  return sortedStudents;
}
