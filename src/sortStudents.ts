
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
      return copy.sort(
        (a: Student, b: Student) => (
          order === 'asc'
            ? a.age - b.age
            : b.age - a.age),
      );

    case SortType.Married:
      return copy.sort(
        (a: Student, b: Student) => (
          order === 'asc'
            ? Number(a.married) - Number(b.married)
            : Number(b.married) - Number(a.married)),
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
