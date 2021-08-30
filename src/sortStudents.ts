// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
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
  AverageGrade = 'grades',
}

enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

function average(grades: number[]): number {
  return grades.reduce((a: number, b: number) => a + b) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === SortOrder.Ascending) {
        copyStudents.sort(
          (a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]),
        );
      } else {
        copyStudents.sort(
          (a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]),
        );
      }
      break;

    case SortType.Age:
      if (order === SortOrder.Ascending) {
        copyStudents.sort((a: Student, b: Student) => a[sortBy] - b[sortBy]);
      } else {
        copyStudents.sort((a: Student, b: Student) => b[sortBy] - a[sortBy]);
      }
      break;

    case SortType.Married:
      if (order === SortOrder.Ascending) {
        copyStudents.sort(
          (a: Student, b: Student) => +a[sortBy] - +b[sortBy],
        );
      } else {
        copyStudents.sort(
          (a: Student, b: Student) => +b[sortBy] - +a[sortBy],
        );
      }
      break;

    case SortType.AverageGrade:
      if (order === SortOrder.Ascending) {
        copyStudents.sort(
          (a: Student, b: Student) => average(a[sortBy]) - average(b[sortBy]),
        );
      } else {
        copyStudents.sort(
          (a: Student, b: Student) => average(b[sortBy]) - average(a[sortBy]),
        );
      }
      break;

    default:
      break;
  }

  return copyStudents;
}
