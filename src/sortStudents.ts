
/* eslint-disable implicit-arrow-linebreak */
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: Array<number>;
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

function countAverage(grades: Array<number>): number {
  const countSum: number = grades.reduce((elem, val) => elem + val, 0);
  const countAve: number = countSum / grades.length;

  return countAve;
}

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const sortedStudents = [...students];

  const compareStrings = (a: string, b: string): number =>
    (order === 'asc' ? a.localeCompare(b) : b.localeCompare(a));

  const compareNumbers = (a: number, b: number): number =>
    (order === 'asc' ? a - b : b - a);

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      // Ensure that a[sortBy] is treated as a string
      sortedStudents.sort((a: Student, b: Student) =>
        compareStrings(a[sortBy.toLowerCase() as keyof Student] as string,
          b[sortBy.toLowerCase() as keyof Student] as string));
      break;

    case SortType.Age:
      sortedStudents.sort((a: Student, b: Student) =>
        compareNumbers(a.age, b.age));
      break;

    case SortType.Married:
      sortedStudents.sort((a: Student, b: Student) =>
        compareNumbers(Number(a.married), Number(b.married)));
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((a: Student, b: Student) =>
        compareNumbers(countAverage(a.grades), countAverage(b.grades)));
      break;

    default:
      break;
  }

  return sortedStudents;
}
