
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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function Average(arr: number[]): number {
  return arr.reduce((sum: number, num: number) => sum + num, 0)
    / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const StudentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return StudentsCopy.sort((a: Student, b: Student) => (
          a[sortBy].localeCompare(b[sortBy])));
      }

      return StudentsCopy.sort((a: Student, b: Student) => (
        b[sortBy].localeCompare(a[sortBy])));

    case SortType.Surname:
      if (order === 'asc') {
        return StudentsCopy.sort((a: Student, b: Student) => (
          a[sortBy].localeCompare(b[sortBy])));
      }

      return StudentsCopy.sort((a: Student, b: Student) => (
        b[sortBy].localeCompare(a[sortBy])));

    case SortType.Age:
      if (order === 'asc') {
        return StudentsCopy.sort((a: Student, b: Student) => (
          a[sortBy] - b[sortBy]));
      }

      return StudentsCopy.sort((a: Student, b: Student) => (
        b[sortBy] - a[sortBy]));

    case SortType.Married:
      if (order === 'asc') {
        return StudentsCopy.sort((a: Student, b: Student) => (
          +a[sortBy] - +b[sortBy]));
      }

      return StudentsCopy.sort((a: Student, b: Student) => (
        +b[sortBy] - +a[sortBy]));

    case SortType.AverageGrade:
      if (order === 'asc') {
        return StudentsCopy.sort((a: Student, b: Student) => (
          Average(a[sortBy]) - Average(b[sortBy])));
      }

      return StudentsCopy.sort((a: Student, b: Student) => (
        Average(b[sortBy]) - Average(a[sortBy])));

    default:
      throw new Error('Wrong sort type!');
  }
}
