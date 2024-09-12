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

const getAverageGrades = (grades: number[]): number => {
  return grades
    .reduce((acc, curr) => acc + curr, 0)
    / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: string,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrades(a[sortBy]) - getAverageGrades(b[sortBy])
          : getAverageGrades(b[sortBy]) - getAverageGrades(a[sortBy]);

      case SortType.Married:
      case SortType.Age:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      default: throw Error('Cannot be sorted by this parameter');
    }
  });
}
