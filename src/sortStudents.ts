
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
  const res: Student[] = students.map(
    (person: Student) => ({
      ...person,
    }),
  );

  switch (sortBy) {
    case SortType.Name:
      res.sort((a: Student, b: Student) => (a.name > b.name ? 1 : -1));

      break;

    case SortType.Surname:
      res.sort((a: Student, b: Student) => (a.surname > b.surname ? 1 : -1));

      if (order === 'desc') {
        res.reverse();
      }

      return res;

    case SortType.Age:
      res.sort((a: Student, b: Student) => (a.age > b.age ? 1 : -1));

      if (order === 'desc') {
        res.reverse();
      }

      break;

    case SortType.Married:
      res.sort((a: Student, b: Student) => (
        Number(a.married) > Number(b.married) ? 1 : -1));

      if (order === 'desc') {
        res.reverse();
      }

      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        res.sort((a: Student, b: Student) => (
          a.grades.reduce((z: number, q: number) => z + q)
          / a.grades.length
          >= b.grades.reduce((z: number, q: number) => z + q)
          / b.grades.length ? 1 : -1));
      }

      if (order === 'desc') {
        res.sort((a: Student, b: Student) => (
          a.grades.reduce((z: number, q: number) => z + q)
          / a.grades.length
          > b.grades.reduce((z: number, q: number) => z + q)
          / b.grades.length ? -1 : 1));
      }
      break;

    default:
      break;
  }

  return res;
}
