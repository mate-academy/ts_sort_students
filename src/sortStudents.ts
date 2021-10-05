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
  AverageGrade,
}

type SortOrder = 'asc' | 'desc';

function getAverage(student: Student): number {
  /* eslint-disable max-len */
  const average: number = student.grades.reduce((total: number, grade: number) => (
    total + grade)) / student.grades.length;

  return average;
}

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) => (
          first.name.localeCompare(second.name)))
        : studentsCopy.sort((first: Student, second: Student) => (
          second.name.localeCompare(first.name)));

    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) => (
          first.surname.localeCompare(second.surname)))
        : studentsCopy.sort((first: Student, second: Student) => (
          second.surname.localeCompare(first.surname)));

    case SortType.Age:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) => (
          first.age - second.age))
        : studentsCopy.sort((first: Student, second: Student) => (
          second.age - first.age));

    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) => (
          +first.married - +second.married))
        : studentsCopy.sort((first: Student, second: Student) => (
          +second.married - +first.married));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((first: Student, second: Student) => (
          getAverage(first) - getAverage(second)))
        : studentsCopy.sort((first: Student, second: Student) => (
          getAverage(second) - getAverage(first)));
    default:
      return studentsCopy;
  }
}
