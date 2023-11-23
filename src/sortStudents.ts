
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, prev) => sum + prev) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedStudents = [...students];
  const exactOrder = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((a, b) => (
        exactOrder * a[sortBy].localeCompare(b[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((a, b) => (
        exactOrder * (+a[sortBy] - +b[sortBy])
      ));

    case SortType.AverageGrade:
      return sortedStudents.sort((a, b) => (
        exactOrder * (getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy]))
      ));

    default:
      return sortedStudents;
  }
}
