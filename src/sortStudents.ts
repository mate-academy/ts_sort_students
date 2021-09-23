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
  // helper functions
  const reducer = (a: number, b: number): number => (a + b);
  const sortByString = (str: 'name' | 'surname'): Student[] => {
    return [...students].sort((a, b) => (
      order === 'desc'
        ? b[str].localeCompare(a[str])
        : a[str].localeCompare(b[str])
    ));
  };

  switch (sortBy) {
    case SortType.Name:
      return sortByString('name');

    case SortType.Surname:
      return sortByString('surname');

    case SortType.Age:

      return [...students].sort((a, b) => (
        order === 'desc'
          ? b.age - a.age
          : a.age - b.age
      ));

    case SortType.Married:

      return [...students].sort((a, b) => (
        order === 'desc'
          ? +b.married - +a.married
          : +a.married - +b.married
      ));

    case SortType.AverageGrade:

      return [...students].sort((a, b) => (
        order === 'desc'
          ? b.grades.reduce(reducer) - a.grades.reduce(reducer)
          : a.grades.reduce(reducer) - b.grades.reduce(reducer)
      ));

    default:
      return [...students];
  }
}
