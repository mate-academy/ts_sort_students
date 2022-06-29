
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
  AverageGrade = 'averGrade'
}

export type SortOrder = 'asc' | 'decs';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStd = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? sortedStd.sort((a: Student, b: Student) => a[sortBy]
          .localeCompare(b[sortBy]))
        : sortedStd.sort((a: Student, b: Student) => b[sortBy]
          .localeCompare(a[sortBy]));
      
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? sortedStd.sort((a: Student, b: Student) => +a[sortBy] - +b[sortBy])
        : sortedStd.sort((a: Student, b: Student) => +b[sortBy] - +a[sortBy]);
    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedStd.sort((a: Student, b: Student) => (
          a.grades.reduce(
            (gradeSum: number, currentGrade: number) => prV + nxtV, 0,
          ) / a.grades.length)
            - (b.grades.reduce(
              (prV: number, nxtV: number) => prV + nxtV, 0,
            ) / b.grades.length))
        : sortedStd.sort((a: Student, b: Student) => (
          b.grades.reduce(
            (prV: number, nxtV: number) => prV + nxtV, 0,
          ) / b.grades.length)
            - (a.grades.reduce(
              (prV: number, nxtV: number) => prV + nxtV, 0,
            ) / a.grades.length));
    default:
      return sortedStd;
  }
}
