
export interface Student {
  name: string;
  surname: string;
  age: number;
  married : boolean;
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

const getAverageGrade = (grades: number[]): number => grades
  .reduce((sum: number, element: number) => sum + element, 0) / grades.length;

function sortByNumber(a: number | boolean): number {
  if (typeof a === 'number') {
    return a;
  }

  return Number(a);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copy.sort(
        (a: Student, b: Student) => (
          order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy])),
      );

    case SortType.Age:
    case SortType.Married:
      return copy.sort(
        (a: Student, b: Student) => (
          order === 'asc'
            ? sortByNumber(a[sortBy]) - sortByNumber(b[sortBy])
            : sortByNumber(b[sortBy]) - sortByNumber(a[sortBy])),
      );

    case SortType.AverageGrade:
      return copy.sort(
        (a: Student, b: Student) => (
          order === 'asc'
            ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
            : getAverageGrade(b.grades) - getAverageGrade(a.grades)),
      );
    default:
      return copy;
  }
}
