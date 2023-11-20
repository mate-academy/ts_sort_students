
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
  const copy = students.map((a) => ({ ...a }));

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    return copy.sort((a, b) => {
      return order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]);
    });
  }

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    return copy.sort((a, b) => {
      return order === 'asc'
        ? a[sortBy] - b[sortBy]
        : b[sortBy] - a[sortBy];
    });
  }

  if (sortBy === SortType.AverageGrade) {
    return copy.sort((a, b) => {
      const aAvg = a[sortBy].reduce((x, y) => x + y, 0) / a[sortBy].length;
      const bAvg = b[sortBy].reduce((x, y) => x + y, 0) / b[sortBy].length;

      return order === 'asc'
        ? aAvg - bAvg
        : bAvg - aAvg;
    });
  }

  return copy;
}
