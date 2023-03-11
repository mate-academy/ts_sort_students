
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  return [...students].sort((a, b): number => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return order === 'asc' ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];

      case SortType.Name:
      case SortType.Surname:
        return order === 'asc' ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc' ? a[sortBy]
          .reduce((prev, current) => prev + current) / a[sortBy].length
          - b[sortBy]
            .reduce((prev, current) => prev + current) / b[sortBy].length
          : b[sortBy]
            .reduce((prev, current) => prev + current) / b[sortBy].length
          - a[sortBy]
            .reduce((prev, current) => prev + current) / a[sortBy].length;

      default:
        return 0;
    }
  });
}
