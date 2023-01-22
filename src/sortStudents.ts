
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function getAverageGerage(student: Student): number {
    return student.grades.reduce(
      (previous: number, current: number) => previous + current, 0,
    )
    / student.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return [...students].sort((a, b) => (
        order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:

      return [...students].sort((a, b) => (
        order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy]
      ));

    case SortType.AverageGrade:
      return [...students].sort((a, b) => (
        order === 'asc'
          ? getAverageGerage(a) - getAverageGerage(b)
          : getAverageGerage(b) - getAverageGerage(a)
      ));
    default:
      throw Error('Not valid data');
  }
}
