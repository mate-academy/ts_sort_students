
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
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return [...students].sort(
          (a, b) => a[sortBy].localeCompare(b[sortBy]),
        );
      }

      return [...students].sort(
        (a, b) => b[sortBy].localeCompare(a[sortBy]),
      );

    case SortType.Age:
      if (order === 'asc') {
        return [...students].sort((a, b) => a.age - b.age);
      }

      return [...students].sort((a, b) => b.age - a.age);

    case SortType.Married:
      if (order === 'asc') {
        return [...students].sort((a, b) => (
          a.married ? 1 : -1) - (b.married ? 1 : -1));
      }

      return [...students].sort((a, b) => (
        b.married ? 1 : -1) - (a.married ? 1 : -1));

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
