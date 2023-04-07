
export interface Student {
  name: string,
  surname: string,
  age: number,
  married:boolean,
  grades: number[]
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

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const copy: Student[] = Array.from(students);
  let result: Student[] = [];

  function sortStrings(a: string, b: string): number {
    return order === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
  }

  function sortNumbers(x: number, y: number): number {
    return order === 'asc' ? x - y : y - x;
  }

  function averageNum(arr: number[]): number {
    return arr.reduce((x, y) => (x + y)) / arr.length;
  }

  if (sortBy === 'name' || sortBy === 'surname' || sortBy === 'married') {
    result = copy.sort((a: Student, b: Student) => (
      sortStrings(`${a[sortBy]}`, `${b[sortBy]}`)));
  }

  if (sortBy === 'age') {
    result = copy.sort((a: Student, b: Student) => (
      sortNumbers(a[sortBy], b[sortBy])));
  }

  if (sortBy === 'grades') {
    result = copy.sort((a: Student, b: Student) => sortNumbers(
      averageNum(a.grades),
      averageNum(b.grades),
    ));
  }

  return result;
}
