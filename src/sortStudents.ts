export interface Student {
  name: String,
  surname: String,
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

function calcAvg(arr: number[]): number {
  return arr.reduce((x, y) => x + y, 0) / arr.length;
}

function compareByAvgGrade(a:Student, b:Student) :number {
  if (calcAvg(a.grades) > calcAvg(b.grades)) {
    return 1;
  }

  if (calcAvg(a.grades) < calcAvg(b.grades)) {
    return -1;
  }

  return 0;
}

type Compare = String | number | boolean;

function compareByString(a: Compare, b: Compare) :number {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const sortedStudents = [...students];

  if (order === 'desc') {
    if (sortBy === SortType.AverageGrade) {
      sortedStudents.sort((a, b) => compareByAvgGrade(b, a));
    } else {
      sortedStudents.sort((a, b) => compareByString(b[sortBy], a[sortBy]));
    }

    return sortedStudents;
  }

  if (sortBy === SortType.AverageGrade) {
    sortedStudents.sort((a, b) => compareByAvgGrade(a, b));
  } else {
    sortedStudents.sort((a, b) => compareByString(a[sortBy], b[sortBy]));
  }

  return sortedStudents;
}
