// describe Student type
interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

// create and export SortType enum
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | string {
  // write your function
  function getAverageAge(array: number[]): number {
    return array.reduce((a, x) => a + x, 0) / array.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return [...students].sort(
        (a: Student, b: Student) => (
          order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy])
        ),
      );

    case SortType.Age:
      return [...students].sort(
        (a: Student, b: Student) => (
          order === 'asc'
            ? a[sortBy] - b[sortBy]
            : b[sortBy] - a[sortBy]
        ),
      );

    case SortType.Married:
      return [...students].sort(
        (a: Student, b: Student) => (
          order === 'asc'
            ? Number(a[sortBy]) - Number(b[sortBy])
            : Number(b[sortBy]) - Number(a[sortBy])
        ),
      );

    case SortType.AverageGrade:
      return [...students].sort(
        (a: Student, b: Student) => (
          order === 'asc'
            ? getAverageAge(a[sortBy]) - getAverageAge(b[sortBy])
            : getAverageAge(b[sortBy]) - getAverageAge(a[sortBy])
        ),
      );

    default:
      return students;
  }
}
