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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  type Callback = (x: number, y: number) => number;

  const sum: Callback = (x, y) => x + y;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) => a[sortBy]
          .localeCompare(b[sortBy]));
      } else {
        sortedStudents.sort((a: Student, b: Student) => b[sortBy]
          .localeCompare(a[sortBy]));
      }
      break;

    case SortType.Age:
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
