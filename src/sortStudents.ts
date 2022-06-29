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
  type Callback2 = (grades: number[]) => number;

  const sum: Callback = (x, y) => x + y;
  const getAvrGrade: Callback2 = (grades) => grades
    .reduce(sum, 0) / grades.length;

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
          .sort((a: Student, b: Student) => Number(a[sortBy])
          - Number(b[sortBy]));
      }

      sortedStudents
        .sort((a: Student, b: Student) => Number(b[sortBy])
        - Number(a[sortBy]));
      break;

    default:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) => a.grades
          .reduce(sum, 0) / a.grades.length
            - b.grades.reduce(sum, 0) / b.grades.length);
      } else {
        sortedStudents.sort((a: Student, b: Student) => getAvrGrade(b.grades)
        - getAvrGrade(a.grades));
      }
      break;
  }

  return sortedStudents;
}
