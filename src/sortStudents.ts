// describe Student type
interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

// create and export SortType enum
export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
type SortOrder = 'desc' | 'asc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const reducer = (a: number, b: number): number => (a + b);

  switch (sortBy) {
    case SortType.Name:
      if (order === 'desc') {
        return [...students].sort((a, b) => (
          b.name.localeCompare(a.name)
        ));
      }

      return [...students].sort((a, b) => (
        a.name.localeCompare(b.name)
      ));

    case SortType.Surname:
      if (order === 'desc') {
        return [...students].sort((a, b) => (
          b.surname.localeCompare(a.surname)
        ));
      }

      return [...students].sort((a, b) => (
        b.surname.localeCompare(a.surname)
      ));

    case SortType.Age:
      if (order === 'desc') {
        return [...students].sort((a, b) => (
          b.age - a.age
        ));
      }

      return [...students].sort((a, b) => (
        a.age - b.age
      ));

    case SortType.Married:
      if (order === 'desc') {
        return [...students].sort((a, b) => (
          +b.married - +a.married
        ));
      }

      return [...students].sort((a, b) => (
        +a.married - +b.married
      ));

    case SortType.AverageGrade:
      if (order === 'desc') {
        return [...students].sort((a, b) => (
          b.grades.reduce(reducer) - a.grades.reduce(reducer)
        ));
      }

      return [...students].sort((a, b) => (
        a.grades.reduce(reducer) - b.grades.reduce(reducer)
      ));

    default:
      return [...students];
  }
}
