
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function getAvarage(arr: number[]): number {
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
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

      sortedStudents.sort((a, b) => (
        order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:

      sortedStudents.sort((a, b) => (
        order === 'asc'
          ? +a[sortBy] - (+b[sortBy])
          : +b[sortBy] - (+a[sortBy])
      ));
      break;

    case SortType.AverageGrade:

      sortedStudents.sort((a, b) => (
        order === 'asc'
          ? getAvarage(a.grades) - getAvarage(b.grades)
          : getAvarage(b.grades) - getAvarage(a.grades)
      ));
      break;

    default:
      break;
  }

  return sortedStudents;
}
