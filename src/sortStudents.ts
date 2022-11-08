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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArr = [...students];

  if (sortBy === SortType.Name) {
    if (order === 'asc') {
      newArr.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (order === 'desc') {
      newArr.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  if (sortBy === SortType.Surname) {
    if (order === 'asc') {
      newArr.sort((a, b) => a.surname.localeCompare(b.surname));
    }

    if (order === 'desc') {
      newArr.sort((a, b) => b.surname.localeCompare(a.surname));
    }
  }

  if (sortBy === SortType.Age) {
    if (order === 'asc') {
      newArr.sort((a, b) => a.age - b.age);
    }

    if (order === 'desc') {
      newArr.sort((a, b) => b.age - a.age);
    }
  }

  if (sortBy === SortType.Married) {
    if (order === 'asc') {
      newArr.sort((a, b) => +(a.married) - +(b.married));
    }

    if (order === 'desc') {
      newArr.sort((a, b) => +(b.married) - +(a.married));
    }
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      newArr.sort((a, b) => averageGrade(a.grades) - averageGrade(b.grades));
    }

    if (order === 'desc') {
      newArr.sort((a, b) => averageGrade(b.grades) - averageGrade(a.grades));
    }
  }

  return newArr;
}
