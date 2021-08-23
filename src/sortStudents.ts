// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
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

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          a.name.localeCompare(b.name)
        ))
        : sortedArr.sort((a, b) => (
          b.name.localeCompare(a.name)
        ));

    case SortType.Surname:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          a.surname.localeCompare(b.surname)
        ))
        : sortedArr.sort((a, b) => (
          b.surname.localeCompare(a.surname)
        ));

    case SortType.Age:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          a.age - b.age
        ))
        : sortedArr.sort((a, b) => (
          b.age - a.age
        ));

    case SortType.Married:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          a.married - b.married
        ))
        : sortedArr.sort((a, b) => (
          b.married - a.married
        ));

    case SortType.AverageGrade:
      return order === 'asc'
        ? sortedArr.sort((a, b) => (
          (a.grades.reduce((sum, val) => sum + val, 0) / a.grades.length)
          - (b.grades.reduce((total, v) => total + v, 0) / b.grades.length)
        ))
        : sortedArr.sort((a, b) => (
          (b.grades.reduce((sum, val) => sum + val, 0) / b.grades.length)
          - (a.grades.reduce((total, v) => total + v, 0) / a.grades.length)
        ));

    default: {
      break;
    }
  }

  return sortedArr;
}
