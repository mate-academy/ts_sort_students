// import { type } from "os";

export interface Student {
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

type Callback = (studentA: Student, studentB: Student) => number;

function getAvarageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function callbackFactory(sortBy: SortType, order: SortOrder): Callback {
  let callBack: Callback;

  switch (sortBy) {
    case SortType.Name:
      callBack = (studentA: Student, studentB: Student): number => (
        order === 'asc'
          ? studentA.name.localeCompare(studentB.name)
          : studentB.name.localeCompare(studentA.name)
      );
      break;

    case SortType.Surname:
      callBack = (studentA: Student, studentB: Student): number => (
        order === 'asc'
          ? studentA.surname.localeCompare(studentB.surname)
          : studentB.surname.localeCompare(studentA.surname)
      );
      break;

    case SortType.Age:
      callBack = (studentA: Student, studentB: Student): number => (
        order === 'asc'
          ? studentA.age - studentB.age
          : studentB.age - studentA.age
      );
      break;

    case SortType.Married:
      callBack = (studentA: Student, studentB: Student): number => (
        order === 'asc'
          ? Number(studentA.married) - Number(studentB.married)
          : Number(studentB.married) - Number(studentA.married)
      );
      break;

    case SortType.AverageGrade:
      callBack = (studentA: Student, studentB: Student): number => (
        order === 'asc'
          ? getAvarageGrade(studentA.grades) - getAvarageGrade(studentB.grades)
          : getAvarageGrade(studentB.grades) - getAvarageGrade(studentA.grades)
      );
      break;

    default:
      throw new Error('Unknown sort type!');
  }

  return callBack;
}

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  const studentsCopy: Student[] = [...students];

  const sortCallback: Callback = callbackFactory(sortBy, order);

  return studentsCopy.sort(sortCallback);
}
