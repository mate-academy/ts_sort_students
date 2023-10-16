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
  AverageGrade = 'grade',
}
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
):object {
  return [...students].sort((a:Student, b:Student) => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);

      case SortType.Surname:
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
        if (order === 'asc') {
          return a[sortBy] - b[sortBy];
        }

        return b[sortBy] - a[sortBy];

      case SortType.Married:
        if (order === 'asc') {
          return +a[sortBy] - +b[sortBy];
        }

        return +b[sortBy] - +a[sortBy];

      case SortType.AverageGrade:
        if (order === 'asc') {
          return a.grades.reduce(
            (prev, item) => prev + item,
          ) / a.grades.length
           - b.grades.reduce((prev, item) => prev + item) / b.grades.length;
        }

        return b.grades.reduce(
          (prev, item) => prev + item,
        ) / b.grades.length - a.grades.reduce(
          (prev, item) => prev + item,
        ) / a.grades.length;

      default:
        return students;
    }
  });
}
