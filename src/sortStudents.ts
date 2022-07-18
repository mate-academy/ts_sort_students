
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const newStudents = [...students];

  function reduce(param: number[]): number {
    return param.reduce((a, b) => a + b) / param.length;
  }

  if (order === 'asc') {
    switch (sortBy) {
      default:
        return [];

      case SortType.Name:
        return newStudents.sort((a, b) => a.name.localeCompare(b.name));

      case SortType.Surname:
        return newStudents.sort((a, b) => a.surname.localeCompare(b.surname));

      case SortType.AverageGrade:
        return newStudents.sort((a, b) => reduce(a.grades) - reduce(b.grades));
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      default:
        return [];

      case SortType.Name:
        return newStudents.sort((a, b) => b.name.localeCompare(a.name));

      case SortType.Surname:
        return newStudents.sort((a, b) => b.surname.localeCompare(a.surname));

      case SortType.Age:
        return newStudents.sort((a, b) => b.age - a.age);

      case SortType.Married:
        return newStudents.sort((a, b) => +b.married - +a.married);

      case SortType.AverageGrade:
        return newStudents.sort((a, b) => reduce(b.grades) - reduce(a.grades));
    }
  }

  return students;
}
