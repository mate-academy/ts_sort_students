
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
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  function AveGr(grArr: number[]): number {
    return grArr.reduce((a, b) => a + b) / grArr.length;
  }

  const isAsc: boolean = order === 'asc';

  const result: Student[] = [...students];

  return result.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      default:

        return isAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:

        return isAsc
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return isAsc
          ? a.age - b.age
          : b.age - a.age;

      case SortType.Married:
        return isAsc
          ? +a.married - +b.married
          : +b.married - +a.married;

      case SortType.AverageGrade:
        return isAsc
          ? AveGr(a.grades) - AveGr(b.grades)
          : AveGr(b.grades) - AveGr(a.grades);
    }
  });
}
