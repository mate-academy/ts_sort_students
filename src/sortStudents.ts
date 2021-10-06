// describe Student type
// create and export SortType enum
// create SortOrder type
export interface Student{
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name='name',
  Surname='surname',
  Age='age',
  Married='married',
  AverageGrade='grades',
}

export type SortOrder = 'asc' | 'desc';

function calculateAvgGrade(studentMarks: number[] = []):number {
  return studentMarks.reduce((sum, curr) => sum + curr, 0)
    / studentMarks.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order: SortOrder,
):Student[] {
  const copyStudents = [...students];
  const k = sortBy;

  switch (k) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents.sort((a, b) => a[k].localeCompare(b[k]))
        : copyStudents.sort((b, a) => a[k].localeCompare(b[k]));
    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents.sort((a, b) => calculateAvgGrade(a[k])
      - calculateAvgGrade(b[k]))
        : copyStudents.sort((b, a) => calculateAvgGrade(a[k])
      - calculateAvgGrade(b[k]));
    case SortType.Age:
      return order === 'asc'
        ? copyStudents.sort((a, b) => a[k] - b[k])
        : copyStudents.sort((b, a) => a[k] - b[k]);
    default:
      return copyStudents.sort((a, b) => {
        return order === 'asc'
          ? Number(a[k]) - Number(b[k])
          : Number(b[k]) - Number(a[k]);
      });
  }
}
