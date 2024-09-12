
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
): Student[] {
  const copyList: Student[] = [...students];

  function evaluation(list: number[]): number {
    return list.reduce((sum, n) => sum + n, 0) / list.length;
  }

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? copyList
          .sort((st1, st2) => st1.name.localeCompare(st2.name))
        : copyList
          .sort((st1, st2) => st1.name.localeCompare(st2.name)).reverse();

    case SortType.Surname:
      return order === 'asc'
        ? copyList
          .sort((st1, st2) => st1.surname.localeCompare(st2.surname))
        : copyList
          .sort((st1, st2) => st1.surname.localeCompare(st2.surname)).reverse();

    case SortType.Age:
      return order === 'asc'
        ? copyList
          .sort((st1, st2) => st1.age - st2.age)
        : copyList
          .sort((st1, st2) => st2.age - st1.age);

    case SortType.Married:
      return order === 'asc'
        ? copyList
          .sort((st1, st2) => Number(st1.married) - Number(st2.married))
        : copyList
          .sort((st1, st2) => Number(st2.married) - Number(st1.married));

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyList
          .sort((st1, st2) => evaluation(st1.grades) - evaluation(st2.grades))
        : copyList
          .sort((st1, st2) => evaluation(st2.grades) - evaluation(st1.grades));

    default:
      return copyList;
  }
}
