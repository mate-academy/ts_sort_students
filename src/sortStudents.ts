// not my solution
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
  AverageGrade = 'averGrade'
}

export type SortOrder = 'asc' | 'desc';

function SortByAvarageGrade(stdArray: Student[], order: SortOrder): Student[] {
  return order === 'asc'
    ? stdArray.sort((a: Student, b: Student) => (
      a.grades.reduce(
        (gradeSum: number, currentGrade: number) => gradeSum + currentGrade, 0,
      ) / a.grades.length)
            - (b.grades.reduce(
              (gradeSum: number, currentGrade: number) => gradeSum
              + currentGrade, 0,
            ) / b.grades.length))
    : stdArray.sort((a: Student, b: Student) => (
      b.grades.reduce(
        (gradeSum: number, currentGrade: number) => gradeSum + currentGrade, 0,
      ) / b.grades.length)
            - (a.grades.reduce(
              (gradeSum: number, currentGrade: number) => gradeSum
              + currentGrade, 0,
            ) / a.grades.length));
}

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
      return SortByAvarageGrade(sortedStd, order);
    default:
      return sortedStd;
  }
}
