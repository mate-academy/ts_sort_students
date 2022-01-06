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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

function average(grades: number[]) : number {
  return grades.reduce((num1, num2) => num1 + num2, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        studentsCopy.sort((studentA, studentB) => (
          studentA.name.localeCompare(studentB.name)));
      } else {
        studentsCopy.sort((studentA, studentB) => (
          studentB.name.localeCompare(studentA.name)));
      }

      break;

    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy.sort((studentA, studentB) => (
          studentA.surname.localeCompare(studentB.surname)));
      } else {
        studentsCopy.sort((studentA, studentB) => (
          studentB.surname.localeCompare(studentA.surname)));
      }

      break;

    case SortType.Age:
      if (order === 'asc') {
        studentsCopy.sort((studentA, studentB) => (
          studentA.age - studentB.age));
      } else {
        studentsCopy.sort((studentA, studentB) => (
          studentB.age - studentA.age));
      }

      break;

    case SortType.Married:
      if (order === 'asc') {
        studentsCopy.sort((studentA, studentB) => (
          +studentA.married - +studentB.married));
      } else {
        studentsCopy.sort((studentA, studentB) => (
          +studentB.married - +studentA.married));
      }

      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        studentsCopy.sort((studentA, studentB) => (
          average(studentA.grades) - average(studentB.grades)));
      } else {
        studentsCopy.sort((studentA, studentB) => (
          average(studentB.grades) - average(studentA.grades)));
      }

      break;

    default:
      return studentsCopy;
  }

  return studentsCopy;
}
