
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

// create SortOrder type
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line max-len
export function sortStudents(students: Student, sortBy: SortType, order: SortOrder): [] {
  if (order === SortOrder.asc) {
    switch (sortBy) {
      case SortType.Name || SortType.Surname:
        return students.slice().sort((x, y) =>
          x.sortBy.localeCompare(y.sortBy));
      case SortType.Age || SortType.Married:
        return students.slice().sort((x, y) => x.sortBy - y.sortBy);
      default:
        return students.slice().sort((x, y) =>
          x.sortBy.reduce((sum, t) => sum + t, 0)
          - y.sortBy.reduce((sum, t) => sum + t, 0));
    }
  } else {
    switch (sortBy) {
      case SortType.Name || SortType.Surname:
        return students.slice().sort((x, y) =>
          y.sortBy.localeCompare(x.sortBy));
      case SortType.Age || SortType.Married:
        return students.slice().sort((x, y) => y.sortBy - x.sortBy);
      default:
        return students.slice().sort((x, y) =>
          y.sortBy.reduce((sum, t) => sum + t, 0)
          - x.sortBy.reduce((sum, t) => sum + t, 0));
    }
  }
}
