
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: true;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(array: number[]): number {
  const sum: number
    = array.reduce((accum: number, current: number) => accum + current, 0);

  return sum / array.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  if (sortBy === SortType.Name && order === 'asc') {
    return copy.sort(
      (a: Student, b: Student) => a.name.localeCompare(b.name),
    );
  }

  if (sortBy === SortType.Surname && order === 'asc') {
    return copy.sort(
      (a: Student, b: Student) => a.surname.localeCompare(b.surname),
    );
  }

  if (sortBy === SortType.Age && order === 'desc') {
    return copy.sort(
      (a: Student, b: Student) => b.age - a.age,
    );
  }

  if (sortBy === SortType.Married && order === 'desc') {
    return copy.sort(
      (a: Student, b: Student) => Number(b.married) - Number(a.married),
    );
  }

  if (sortBy === SortType.AverageGrade && order === 'desc') {
    return copy.sort(
      (a: Student, b: Student) => getAverageGrade(b.grades)
        - getAverageGrade(a.grades),
    );
  }

  if (sortBy === SortType.AverageGrade && order === 'asc') {
    return copy.sort(
      (a: Student, b: Student) => getAverageGrade(a.grades)
      - getAverageGrade(b.grades),
    );
  }

  return copy;
}
