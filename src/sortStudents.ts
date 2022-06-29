
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

  switch (sortBy || order) {
    case SortType.Name || 'asc':
      return copyList
        .sort((st1, st2) => st1.name.localeCompare(st2.name));

    case SortType.Surname || 'asc':
      return copyList
        .sort((st1, st2) => st1.surname.localeCompare(st2.surname));

    case SortType.Age || 'desc':
      return copyList
        .sort((st1, st2) => st2.age - st1.age);

    case SortType.Married || 'desc':
      return copyList
        .sort((st1, st2) => Number(st2.married) - Number(st1.married));

    case SortType.AverageGrade:
      return order === 'desc'
        ? copyList
          .sort((st1, st2) => evaluation(st2.grades) - evaluation(st1.grades))
        : copyList
          .sort((st1, st2) => evaluation(st1.grades) - evaluation(st2.grades));

    default:
      return copyList;
  }
}
