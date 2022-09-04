
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

export type SortOrder = 'asc'|'desc';

function getAverageGrades(studentGrades: number[]): number {
  return studentGrades.reduce((sum, a) => sum + a, 0) / studentGrades.length;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrSortStudents: Student[] = Object.assign([], students);

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? arrSortStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : arrSortStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? arrSortStudents.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : arrSortStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? arrSortStudents.sort((a, b) => (
          getAverageGrades(a.grades) - getAverageGrades(b.grades)))
        : arrSortStudents.sort((a, b) => (
          getAverageGrades(b.grades) - getAverageGrades(a.grades)));

    default:
      return arrSortStudents;
  }
}
