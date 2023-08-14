
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

const AverageGrade
  = (arr: number[]): number => {
    if (arr.length === 0) {
      return 0;
    }

    return arr.reduce((a: number, b: number) => a + b, 0) / arr.length;
  };

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const orderType = order === 'asc';

  if (sortBy === SortType.Name) {
    return orderType
      ? studentsCopy.sort((a, b) => a.name.localeCompare(b.name))
      : studentsCopy.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortBy === SortType.Surname) {
    return orderType
      ? studentsCopy.sort((a, b) => a.surname.localeCompare(b.surname))
      : studentsCopy.sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if (sortBy === SortType.Age) {
    return orderType
      ? studentsCopy.sort((a, b) => a.age - b.age)
      : studentsCopy.sort((a, b) => b.age - a.age);
  }

  if (sortBy === SortType.AverageGrade) {
    return orderType
      ? studentsCopy
        .sort((a, b) => AverageGrade(a.grades) - AverageGrade(b.grades))
      : studentsCopy
        .sort((a, b) => AverageGrade(b.grades) - AverageGrade(a.grades));
  }

  return orderType
    ? studentsCopy.sort((a, b) => Number(a.married) - Number(b.married))
    : studentsCopy.sort((a, b) => Number(b.married) - Number(a.married));
}
