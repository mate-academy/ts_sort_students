
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function sortByString(st1: string | boolean, st2: string | boolean,
  ord: SortOrder): number {
  if (ord === 'asc') {
    return st1.toString().localeCompare(st2.toString());
  }

  return st2.toString().localeCompare(st1.toString());
}

function sortByNumber(st1: number, st2: number, ord: SortOrder): number {
  if (ord === 'asc') {
    return st1 - st2;
  }

  return st2 - st1;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const result: Student[] = [...students];

  result.sort((st1: Student, st2: Student): number => {
    const avGrade1 = st1.grades.reduce((gr1: number,
      gr2: number): number => gr1 + gr2, 0) / st1.grades.length;
    const avGrade2 = st2.grades.reduce((gr1: number,
      gr2: number): number => gr1 + gr2, 0) / st2.grades.length;

    switch (sortBy) {
      case SortType.Name:
        return sortByString(st1.name, st2.name, order);

      case SortType.Surname:
        return sortByString(st1.surname, st2.surname, order);

      case SortType.Age:
        return sortByNumber(st1.age, st2.age, order);

      case SortType.Married:
        return sortByString(st1.married, st2.married, order);

      case SortType.AverageGrade:
        return sortByNumber(avGrade1, avGrade2, order);

      default:
        return 0;
    }
  });

  return result;
}
