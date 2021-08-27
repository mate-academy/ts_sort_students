// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
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

type SortOrder = 'asc' | 'desc';

function getAverageGrade(student : Student): number {
  return student.grades.reduce(
    (a: number, b: number) => a + b, 0,
  ) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  if (sortBy === SortType.Name) {
    if (order === 'asc') {
      return studentsCopy.sort((a, b) => a.name.localeCompare(b.name));
    }

    return studentsCopy.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortBy === SortType.Surname) {
    if (order === 'asc') {
      return studentsCopy.sort((a, b) => a.surname.localeCompare(b.surname));
    }

    return studentsCopy.sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if (sortBy === SortType.Age) {
    if (order === 'asc') {
      return studentsCopy.sort((a, b) => a.age - b.age);
    }

    return studentsCopy.sort((a, b) => b.age - a.age);
  }

  if (sortBy === SortType.Married) {
    if (order === 'asc') {
      return studentsCopy.sort((a, b) => +a.married - +b.married);
    }

    return studentsCopy.sort((a, b) => +b.married - +a.married);
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      return studentsCopy.sort(
        (a, b) => getAverageGrade(a) - getAverageGrade(b),
      );
    }

    return studentsCopy.sort((a, b) => getAverageGrade(b) - getAverageGrade(a));
  }

  return studentsCopy;
}
