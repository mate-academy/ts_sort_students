
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
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
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

  return students.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      default:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case SortType.Married:
        return order === 'asc'
          ? +a.married - +b.married
          : +b.age - +a.age;

      case SortType.AverageGrade:
        return order === 'asc'
          ? AveGr(a.grades) - AveGr(b.grades)
          : AveGr(b.grades) - AveGr(a.grades);
    }
  });
}
