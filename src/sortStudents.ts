
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
export type SortOrder = 'ASC' | 'DESC';

type Callback = (grades: number[]) => number;
type Comparison = (a: string, b: string) => number;

const calc: Callback = (grades) => {
  return grades.reduce((a, b) => a + b) / grades.length;
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
      if (order === 'ASC') {
        sortedStudents.sort((a: Student, b: Student) =>
          compare(a.name, b.name));
      } else if (order === 'DESC') {
        sortedStudents.sort((a: Student, b: Student) =>
          compare(b.name, a.name));
      }
      break;

    case SortType.Surname:
      if (order === 'ASC') {
        sortedStudents.sort((a: Student, b: Student) =>
          compare(a.surname, b.surname));
      } else if (order === 'DESC') {
        sortedStudents.sort((a: Student, b: Student) =>
          compare(b.surname, a.surname));
      }
      break;

    case SortType.Age:
      if (order === 'ASC') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>a.age - <number>b.age);
      } else if (order === 'DESC') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>b.age - <number>a.age);
      }
      break;

    case SortType.Married:
      if (order === 'ASC') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>+a.married - <number>+b.married);
      } else if (order === 'DESC') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>+b.married - <number>+a.married);
      }
      break;

    case SortType.AverageGrade:
      if (order === 'ASC') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>calc(a.grades) - <number>calc(b.grades));
      } else if (order === 'DESC') {
        sortedStudents.sort((a: Student, b: Student) =>
          <number>calc(b.grades) - <number>calc(a.grades));
      }
      break;
  }

  return sortedStudents;
}
