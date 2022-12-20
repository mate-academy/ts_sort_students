
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const getAverage = (grades: number[]): number => {
    return grades.reduce((a, b) => a + b, 0) / (grades.length || 1);
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCopy.sort((b, a) => a[sortBy].localeCompare(b[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : studentsCopy.sort((b, a) => Number(a[sortBy]) - Number(b[sortBy]));
    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy
          .sort((a, b) => getAverage(a.grades) - getAverage(b.grades))
        : studentsCopy
          .sort((b, a) => getAverage(a.grades) - getAverage(b.grades));
    default:
      throw new Error(`Sort type '${sortBy}' not supported`);
  }
}
