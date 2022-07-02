
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
  AverageGrade = 'averageAge'
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  if (order === SortOrder.asc) {
    switch (sortBy) {
      case SortType.Name:
        return [...students].sort((student1, student2) =>
          student1.sortBy.localeCompare(student2.sortBy));
      case SortType.Surname:
        return [...students].sort((student1, student2) =>
          student1.sortBy.localeCompare(student2.sortBy));
      case SortType.Age || SortType.Married:
        return [...students].sort((student1, student2) =>
          student1.sortBy - student2.sortBy);
      default:
        return [...students].sort((student1, student2) =>
          student1.sortBy.reduce((sum, t) => sum + t, 0)
          - student2.sortBy.reduce((sum, t) => sum + t, 0));
    }
  } else {
    switch (sortBy) {
      case SortType.Name || SortType.Surname:
        return [...students].sort((student1, student2) =>
          student2.sortBy.localeCompare(student1.sortBy));
      case SortType.Surname:
        return [...students].sort((student1, student2) =>
          student1.sortBy.localeCompare(student2.sortBy));
      case SortType.Age || SortType.Married:
        return [...students].sort((student1, student2) =>
          student2.sortBy - student1.sortBy);
      default:
        [...students].sort((student1, student2) =>
          student2.sortBy.reduce((sum, t) => sum + t, 0)
          - student1.sortBy.reduce((sum, t) => sum + t, 0));
    }
  }
}
