
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function findAverageGrade(gradeArr: number []): number {
  return gradeArr
    .reduce((accum: number, curr: number) => accum + curr, 0)
    / gradeArr.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const studentsCopy: Student[] = [...students];

  studentsCopy.sort((a, b) => {
    const prev = (sortBy === SortType.AverageGrade)
      ? findAverageGrade(a[`${sortBy}`])
      : a[`${sortBy}`];
    const curr = (sortBy === SortType.AverageGrade)
      ? findAverageGrade(b[`${sortBy}`])
      : b[`${sortBy}`];

    if ((order === 'asc' && prev > curr) || (order === 'desc' && prev < curr)) {
      return 1;
    }

    if ((order === 'asc' && curr > prev) || (order === 'desc' && curr < prev)) {
      return -1;
    }

    return 0;
  });

  return studentsCopy;
}
