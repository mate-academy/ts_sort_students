
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
  function getAverageGerage(student): number {
    return student.grades.reduce(
      (previous: number, current: number) => previous + current, 0,
    )
    / student.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      return (order === 'asc')
        ? [...students].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:

      return (order === 'asc')
        ? [...students].sort((a, b) => +a[sortBy] - +b[sortBy])
        : [...students].sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:

      return (order === 'asc')
        ? [...students].sort(
          (a, b) => getAverageGerage(a) - getAverageGerage(b),
        )

        : [...students].sort(
          (a, b) => getAverageGerage(b) - getAverageGerage(a),
        );

    default:
      throw Error('Not valid data');
  }
}
