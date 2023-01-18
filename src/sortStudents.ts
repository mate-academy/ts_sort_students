
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
  AverageGrade = 'grade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  return grades.reduce((prev: number, curr: number) => (
    prev + curr
  )) / grades.length;
}

function sortString(a: string, b: string, order: string): number {
  return order === 'asc'
    ? a.localeCompare(b)
    : b.localeCompare(a);
}

function sortNumber(a: number, b: number, order: string): number {
  return order === 'asc'
    ? a - b
    : b - a;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((a: Student, b: Student) => (
        sortString(a[sortBy], b[sortBy], order, sortBy)
      ));
      break;

    case SortType.Age:
      studentsCopy.sort((a: Student, b: Student) => (
        sortNumber(a.age, b.age, order)
      ));
      break;

    case SortType.Married:
      studentsCopy.sort((a: Student, b: Student) => (
        sortNumber(Number(a.married), Number(b.married), order)
      ));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((a: Student, b: Student) => (
        sortNumber(averageGrade(a.grades), averageGrade(b.grades), order)
      ));
      break;

    default:
      throw new Error('Sort type not correct');
  }

  return studentsCopy;
}
