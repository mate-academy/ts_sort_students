
export interface Student {
  // describe Student interface
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
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const result: Student[] = students.map(
    (person: Student) => ({
      ...person,
    }),
  );

  switch (sortBy) {
    case SortType.Name:
      result.sort((a: Student, b: Student) => (a.name > b.name ? 1 : -1));

      break;

    case SortType.Surname:
      result.sort((a: Student, b: Student) => (a.surname > b.surname ? 1 : -1));

      if (order === 'desc') {
        result.reverse();
      }

      return result;

    case SortType.Age:
      result.sort((a: Student, b: Student) => (a.age > b.age ? 1 : -1));

      if (order === 'desc') {
        result.reverse();
      }

      break;

    case SortType.Married:
      result.sort((a: Student, b: Student) => (
        Number(a.married) > Number(b.married) ? 1 : -1));

      if (order === 'desc') {
        result.reverse();
      }

      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        result.sort((a: Student, b: Student) => (
          a.grades.reduce((z: number, q: number) => z + q)
          / a.grades.length
          >= b.grades.reduce((z: number, q: number) => z + q)
          / b.grades.length ? 1 : -1));
      }

      if (order === 'desc') {
        result.sort((a: Student, b: Student) => (
          a.grades.reduce((z: number, q: number) => z + q)
          / a.grades.length
          > b.grades.reduce((z: number, q: number) => z + q)
          / b.grades.length ? -1 : 1));
      }
      break;

    default:
      break;
  }

  return result;
}
