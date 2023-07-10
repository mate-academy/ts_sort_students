
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
  AverageGrade = 'average',
}

export type SortOrder = 'asc' |'desc';

function getAverageGrade(grades: number[]): number {
  const sum = grades.reduce((acc, value) => acc + value, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortOrder = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return [...students].sort(
        (a, b) => sortOrder * a[sortBy].localeCompare(b[sortBy]),
      );

    case SortType.Age:
    case SortType.Married:

      return [...students].sort((a, b) => sortOrder * (+a[sortBy]
        - +b[sortBy]));

    case SortType.AverageGrade:
      if (order === 'asc') {
        return [...students].sort(
          (a, b) => getAverageGrade(a.grades) - getAverageGrade(b.grades),
        );
      }

      return [...students].sort(
        (a, b) => getAverageGrade(b.grades) - getAverageGrade(a.grades),
      );
    default: return [...students];
  }
}
