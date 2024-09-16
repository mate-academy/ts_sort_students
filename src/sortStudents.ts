
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrOfStudents = [...students];
  const getAverageGrade = (grades: number[]): number => grades
    .reduce((sum, grade) => sum + grade, 0) / grades.length;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return arrOfStudents.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return arrOfStudents.sort((a, b) => (order === 'asc'
        ? +a[sortBy] - +b[sortBy]
        : +b[sortBy] - +a[sortBy]));

    case SortType.AverageGrade:
      return arrOfStudents.sort((a, b) => (order === 'asc'
        ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
        : getAverageGrade(b.grades) - getAverageGrade(a.grades)));

    default:
      return arrOfStudents;
  }
}
