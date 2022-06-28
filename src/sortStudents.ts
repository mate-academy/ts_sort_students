
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

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  type Sum = (a: number, b: number) => number;

  const sortedStudents: Student[] = [...students];
  const sum: Sum = (a, b) => a + b;

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) => a[sortBy]
          .localeCompare(b[sortBy]));
      }
      break;
    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) => a[sortBy]
          .localeCompare(b[sortBy]));
      }
      break;
    case SortType.Age:
      if (order === 'asc') {
        sortedStudents
          .sort((a: Student, b: Student) => +a[sortBy] - +b[sortBy]);
      } else {
        sortedStudents
          .sort((a: Student, b: Student) => +b[sortBy] - +a[sortBy]);
      }
      break;
    case SortType.Married:
      if (order === 'asc') {
        sortedStudents
          .sort((a: Student, b: Student) => +a[sortBy] - +b[sortBy]);
      } else {
        sortedStudents
          .sort((a: Student, b: Student) => +b[sortBy] - +a[sortBy]);
      }
      break;
    default:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) => a.grades
          .reduce(sum, 0) / a.grades.length
            - b.grades.reduce(sum, 0) / b.grades.length);
      } else {
        sortedStudents.sort((a: Student, b: Student) => b.grades
          .reduce(sum, 0) / b.grades.length
            - a.grades.reduce(sum, 0) / a.grades.length);
      }
      break;
  }

  return sortedStudents;
}
