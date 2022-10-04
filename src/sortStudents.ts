
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

function getAvarage(grades: number[]): number {
  return grades.reduce((prev: number, curr: number) => (
    prev + curr
  ), 0) / grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((prev: Student, curr: Student) => (
        order === 'asc'
          ? prev[sortBy].localeCompare(curr[sortBy])
          : curr[sortBy].localeCompare(prev[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort((prev: Student, curr: Student) => (
        order === 'asc'
          ? Number(prev[sortBy]) - Number(curr[sortBy])
          : Number(curr[sortBy]) - Number(prev[sortBy])
      ));

    case SortType.AverageGrade:
      return studentsCopy.sort((prev: Student, curr: Student) => (
        order === 'asc'
          ? getAvarage(prev[sortBy]) - getAvarage(curr[sortBy])
          : getAvarage(curr[sortBy]) - getAvarage(prev[sortBy])
      ));
    default:
      return studentsCopy;
  }
}
