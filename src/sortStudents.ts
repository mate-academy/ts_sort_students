
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
  const studentsToSort = [...students];
  const getAverage = (grades: number[]): number => {
    return (grades.reduce((a, b) => a + b, 0) / grades.length) || 0;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsToSort.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsToSort.sort((b, a) => a[sortBy].localeCompare(b[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsToSort.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : studentsToSort.sort((b, a) => Number(a[sortBy]) - Number(b[sortBy]));
    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsToSort
          .sort((a, b) => getAverage(a.grades) - getAverage(b.grades))
        : studentsToSort
          .sort((b, a) => getAverage(a.grades) - getAverage(b.grades));
    default:
      return [];
  }
}
