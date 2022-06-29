
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studCopy = [...students];

  type Callback = (grades: number[]) => number;

  const getAvrGrade: Callback = (grades) => grades
    .reduce((sum, cur) => sum + cur, 0) / grades.length;

  if (order === 'asc') {
    studCopy.sort((a: Student, b: Student) => {
      switch (sortBy) {
        case SortType.Name:
          return a.name.localeCompare(b.name);

        case SortType.Surname:
          return a.surname.localeCompare(b.surname);

        case SortType.Age:
          return a.age - b.age;

        case SortType.Married:
          return +a.married - +b.married;

        case SortType.AverageGrade:
          return getAvrGrade(a.grades) - getAvrGrade(b.grades);

        default:
          return 0;
      }
    });
  }

  if (order === 'desc') {
    studCopy.sort((a: Student, b: Student) => {
      switch (sortBy) {
        case SortType.Name:
          return b.name.localeCompare(a.name);

        case SortType.Surname:
          return b.surname.localeCompare(a.surname);

        case SortType.Age:
          return b.age - a.age;

        case SortType.Married:
          return +b.married - +a.married;

        case SortType.AverageGrade:
          return getAvrGrade(b.grades) - getAvrGrade(a.grades);

        default:
          return 0;
      }
    });
  }

  return studCopy;
}
