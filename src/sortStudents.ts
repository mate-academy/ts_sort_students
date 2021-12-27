
export interface Student {
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

type Callback = (grades: number[]) => number;
type Comparison = (a: string, b: string) => number;

const calc: Callback = (grades) => {
  return grades.reduce((a: number, b: number) => a + b) / grades.length;
};

const compare: Comparison = (a, b) => {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
};

export function sortStudents(students, sortBy, order): object[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) =>
          compare(a.name, b.name));
      } else if (order === 'desc') {
        sortedStudents.sort((a: Student, b: Student) =>
          compare(b.name, a.name));
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) =>
          compare(a.surname, b.surname));
      } else if (order === 'desc') {
        sortedStudents.sort((a: Student, b: Student) =>
          compare(b.surname, a.surname));
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>a.age - <number>b.age);
      } else if (order === 'desc') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>b.age - <number>a.age);
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>+a.married - <number>+b.married);
      } else if (order === 'desc') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>+b.married - <number>+a.married);
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>calc(a.grades) - <number>calc(b.grades));
      } else if (order === 'desc') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>calc(b.grades) - <number>calc(a.grades));
      }
      break;
  }

  return sortedStudents;
}
