
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        sortedStudents.sort((a: Student, b: Student) => (
          a[sortBy].localeCompare(b[sortBy])));

        break;

      case SortType.Age:
        sortedStudents.sort((a: Student, b: Student) => (
          a[sortBy] - b[sortBy]));

        break;

      case SortType.Married:
        sortedStudents.sort((a: Student, b: Student) => (
          +a[sortBy] - +b[sortBy]));

        break;

      case SortType.AverageGrade:
        sortedStudents.sort((a: Student, b: Student) => {
          const averageGrade1 = a[sortBy].reduce((prev, accum) => prev + accum)
          / a[sortBy].length;

          const averageGrade2 = b[sortBy].reduce((prev, accum) => prev + accum)
          / b[sortBy].length;

          return averageGrade1 - averageGrade2;
        });

        break;

      default:
        throw new Error('error');
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        sortedStudents.sort((a: Student, b: Student) => (
          b[sortBy].localeCompare(a[sortBy])));

        break;

      case SortType.Age:
        sortedStudents.sort((a: Student, b: Student) => (
          b[sortBy] - a[sortBy]));

        break;

      case SortType.Married:
        sortedStudents.sort((a: Student, b: Student) => (
          +b[sortBy] - +a[sortBy]));

        break;

      case SortType.AverageGrade:
        sortedStudents.sort((a: Student, b: Student) => {
          const averageGrade1 = a[sortBy].reduce((prev, accum) => prev + accum)
          / a[sortBy].length;

          const averageGrade2 = b[sortBy].reduce((prev, accum) => prev + accum)
          / b[sortBy].length;

          return averageGrade2 - averageGrade1;
        });

        break;

      default:
        throw new Error('error');
    }
  }

  return sortedStudents;
}
