
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return [...students].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      return [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return [...students].sort((a, b) => +a[sortBy] - +b[sortBy]);
      }

      return [...students].sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return [...students].sort(
          (a, b) => (a.grades.reduce((sum, el) => sum + el) / a.grades.length)
          - (b.grades.reduce((sum, el) => sum + el) / b.grades.length),
        );
      }

      return [...students].sort(
        (a, b) => (b.grades.reduce((sum, el) => sum + el) / b.grades.length)
        - (a.grades.reduce((sum, el) => sum + el) / a.grades.length),
      );

    default:
      return students;
  }
}
