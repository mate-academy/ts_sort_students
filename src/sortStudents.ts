
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

  return result.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return a.name >= b.name ? 1 : -1;
        }

        return a.name > b.name ? -1 : 1;

      case SortType.Surname:
        if (order === 'asc') {
          return a.surname >= b.surname ? 1 : -1;
        }

        return a.surname > b.surname ? -1 : 1;

      case SortType.Age:
        if (order === 'asc') {
          return a.age >= b.age ? 1 : -1;
        }

        return a.age > b.age ? -1 : 1;

      case SortType.Married:
        if (order === 'asc') {
          return Number(a.married) >= Number(b.married) ? 1 : -1;
        }

        return Number(a.married) > Number(b.married) ? -1 : 1;

      case SortType.AverageGrade:
        if (order === 'asc') {
          return a.grades.reduce((z: number, q: number) => z + q)
            / a.grades.length
            >= b.grades.reduce((z: number, q: number) => z + q)
            / b.grades.length ? 1 : -1;
        }

        return a.grades.reduce((z: number, q: number) => z + q)
            / a.grades.length
            > b.grades.reduce((z: number, q: number) => z + q)
            / b.grades.length ? -1 : 1;

      default:
        throw new Error('error');
    }
  });
}
