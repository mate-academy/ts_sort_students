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

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const studentsArray: Student[] = [...students];

  function averAge(ageArray: number[]): number {
    return ageArray.reduce((sum, item) => sum + item) / ageArray.length;
  }

  function callBack(a: Student, b: Student): number {
    const one = a;
    const two = b;
    let first = one;
    let second = two;

    if (order === 'desc') {
      first = two;
      second = one;
    }

    switch (sortBy) {
      case SortType.Age:
        return first.age - second.age;
      case SortType.Married:
        return Number(first.married) - Number(second.married);
      case SortType.AverageGrade:
        return averAge(first.grades) - averAge(second.grades);
      case SortType.Name:
        return first.name.localeCompare(second.name);
      case SortType.Surname:
        return first.surname.localeCompare(second.surname);
      default:
        return 0;
    }
  }

  return studentsArray.sort(callBack);
}
