
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return [...students].sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
      return [...students].sort((a, b) => {
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.Married:
      return [...students].sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });

    case SortType.AverageGrade:
      return [...students].sort((a, b) => {
        const studentA = a.grades.reduce((sum, grade) => sum
        + grade) / a.grades.length;
        const studentB = b.grades.reduce((sum, grade) => sum
        + grade) / b.grades.length;

        return order === 'asc'
          ? studentA - studentB
          : studentB - studentA;
      });

    default:
      return students;
  }
}
