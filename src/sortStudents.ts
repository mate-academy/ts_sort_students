
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGradeFunc(grades: number[]): number {
  let avarage: number = 0;
  let sum: number = 0;

  for (let i: number = 0; i < grades.length; i += 1) {
    sum += grades[i];
    avarage = sum / grades.length;
  }

  return avarage;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  // write your function
  let newArr: object[] = [];

  if (sortBy === 0) {
    newArr = [...students].sort((a, b) => (a.name).localeCompare(b.name));
  }

  if (sortBy === 1) {
    newArr = [...students].sort((a, b) => (a.surname).localeCompare(b.surname));
  }

  if (sortBy === 2) {
    newArr = [...students].sort((a, b) => (a.age) - (b.age));
  }

  if (sortBy === 3) {
    newArr = [...students].sort((a, b) => Number(b.married)
    - Number(a.married));
  }

  if (sortBy === 4) {
    newArr = [...students].sort((a, b) => (
      averageGradeFunc(a.grades)) - (averageGradeFunc(b.grades)));
  }

  if (order === 'desc') {
    return newArr.reverse();
  }

  return newArr;
}
