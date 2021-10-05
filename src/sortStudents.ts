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

  if (order === 'asc') {
    switch (k) {
      case SortType.Name:
      case SortType.Surname:
        copyStudents.sort((a, b) => a[k].localeCompare(b[k]));
        break;
      case SortType.AverageGrade:
        copyStudents.sort((a, b) => calculateAvgGrade(a[k])
        - calculateAvgGrade(b[k]));
        break;
      case SortType.Age:
        copyStudents.sort((a, b) => a[k] - b[k]);
        break;
      default:
        copyStudents.sort((a, b) => {
          if (a[k] === b[k]) {
            return 0;
          }

          if (a[k]) {
            return 1;
          }

          return -1;
        });
        break;
    }
  } else {
    switch (k) {
      case SortType.Name:
      case SortType.Surname:
        copyStudents.sort((b, a) => a[k].localeCompare(b[k]));
        break;
      case SortType.AverageGrade:
        copyStudents.sort((b, a) => calculateAvgGrade(a[k])
        - calculateAvgGrade(b[k]));
        break;
      case SortType.Age:
        copyStudents.sort((b, a) => a[k] - b[k]);
        break;
      default:
        copyStudents.sort((b, a) => {
          if (a[k] === b[k]) {
            return 0;
          }

          if (a[k]) {
            return 1;
          }

          return -1;
        });
        break;
    }
  }

  return copyStudents;
}
