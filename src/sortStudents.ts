// # Sort students

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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function compare(
    a: string | boolean | number,
    b: string | boolean | number,
  ): number {
    if (a < b) {
      return order === 'asc' ? -1 : 1;
    }

    if (a > b) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  }

  function getAvg(grades: number[]): number {
    return grades.reduce((a: number, c: number) => a + c, 0) / grades.length;
  }

  return students.toSorted((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return compare(a.name, b.name);
      case SortType.Surname:
        return compare(a.surname, b.surname);
      case SortType.Age:
        return compare(a.age, b.age);
      case SortType.Married:
        return compare(a.married, b.married);
      case SortType.AverageGrade:
        return compare(getAvg(a.grades), getAvg(b.grades));
      default:
        return 0;
    }
  });
}
