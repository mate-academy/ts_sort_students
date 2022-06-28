
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | number {
  const copyList: Student[] = [...students];

  if (sortBy === SortType.Name && order === 'asc') {
    return copyList.sort((st1, st2) => st1.name.localeCompare(st2.name));
  }

  if (sortBy === SortType.Surname && order === 'asc') {
    return copyList.sort((st1, st2) => st1.surname.localeCompare(st2.surname));
  }

  if (sortBy === SortType.Age && order === 'desc') {
    return copyList.sort((st1, st2) => st2.age - st1.age);
  }

  if (sortBy === SortType.Married && order === 'desc') {
    return copyList
      .sort((st1, st2) => Number(st2.married) - Number(st1.married));
  }

  function evaluation(list: number[]): number {
    return list.reduce((sum, n) => sum + n, 0) / list.length;
  }

  if (sortBy === SortType.AverageGrade && order === 'asc') {
    return copyList
      .sort((st1, st2) => evaluation(st1.grades) - evaluation(st2.grades));
  }

  return copyList
    .sort((st1, st2) => evaluation(st2.grades) - evaluation(st1.grades));
}
