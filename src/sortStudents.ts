
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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
  return grades
    .reduce((acc: number, curr: number): number => acc + curr) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((a: Student, b: Student) => (
        order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])));

    case SortType.Age:
      return sortedStudents.sort((a: Student, b: Student) => (
        order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy]
      ));

    case SortType.Married:
      return sortedStudents.sort((a: Student, b: Student) => (
        order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy]
      ));

    case SortType.AverageGrade:
      return sortedStudents.sort((a: Student, b: Student) => (
        order === 'asc'
          ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
          : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy])
      ));

    default:
      return [];
  }
}
