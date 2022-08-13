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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? [...students].sort((a, b) => +a[sortBy] - +b[sortBy])
        : [...students].sort((a, b) => +b[sortBy] - +a[sortBy]);
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? [...students].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    case SortType.AverageGrade:
      return (order === 'asc')
        ? [...students].sort(
          (a, b) => a[sortBy].reduce((sum, x) => sum + x, 0) / a[sortBy].length
            - b[sortBy].reduce((sum, x) => sum + x, 0) / b[sortBy].length,
        )
        : [...students].sort(
          (a, b) => b[sortBy].reduce((sum, x) => sum + x, 0) / b[sortBy].length
            - a[sortBy].reduce((sum, x) => sum + x, 0) / a[sortBy].length,
        );
    default:
      break;
  }

  return students;
}
