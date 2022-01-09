
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
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

function getAverage(array: number[]): number {
  return array.reduce((prev, curr) => prev + curr) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  if ((sortBy === SortType.Name)) {
    return order === 'asc'
      ? copyStudents.sort((a, b) => a.name.localeCompare(b.name))
      : copyStudents.sort((a, b) => b.name.localeCompare(a.name));
  }

  if ((sortBy === SortType.Surname)) {
    return order === 'asc'
      ? copyStudents.sort((a, b) => a.surname.localeCompare(b.surname))
      : copyStudents.sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if ((sortBy === SortType.Age)) {
    return order === 'asc'
      ? copyStudents.sort((a, b) => a.age - b.age)
      : copyStudents.sort((a, b) => b.age - a.age);
  }

  if ((sortBy === SortType.Married)) {
    return order === 'asc'
      ? copyStudents.sort((a, b) => Number(a.married) - Number(b.married))
      : copyStudents.sort((a, b) => Number(b.married) - Number(a.married));
  }

  return order === 'asc'
    ? copyStudents.sort((a, b) => getAverage(a.grades) - getAverage(b.grades))
    : copyStudents.sort((a, b) => getAverage(b.grades) - getAverage(a.grades));
}
