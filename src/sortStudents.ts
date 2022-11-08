function averageGrade(array: number[]): number {
  const result = array.reduce((sum, a) => sum + a, 0);

  return result / array.length;
}

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'NAME',
  Surname = 'SURNAME',
  Age = 'AGE',
  Married = 'MARRIED',
  AverageGrade = 'GRADE',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArr = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? newArr.sort((a, b) => a.name.localeCompare(b.name))
        : newArr.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return order === 'asc'
        ? newArr.sort((a, b) => a.surname.localeCompare(b.surname))
        : newArr.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return order === 'asc'
        ? newArr.sort((a, b) => a.age - b.age)
        : newArr.sort((a, b) => b.age - a.age);

    case SortType.Married:
      return order === 'asc'
        ? newArr.sort((a, b) => +(a.married) - +(b.married))
        : newArr.sort((a, b) => +(b.married) - +(a.married));

    case SortType.AverageGrade:
      return order === 'asc'
        ? newArr.sort((a, b) => averageGrade(a.grades)
          - averageGrade(b.grades))
        : newArr.sort((a, b) => averageGrade(b.grades)
          - averageGrade(a.grades));

    default:
      return newArr;
  }
}
