
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

export type SortOrder = 'asc' | 'desc';

function getAverage(
  firstStudent:number[],
  secondStudent:number[],
  order?:string,
):number {
  const first:number = firstStudent
    .reduce((accumulator:number, studentGrade:number) => (
      accumulator + studentGrade
    ), 0) / firstStudent.length;

  const second:number = secondStudent
    .reduce((accumulator:number, studentGrade:number) => (
      accumulator + studentGrade
    ), 0) / secondStudent.length;

  if (order === 'asc') {
    return first - second;
  }

  return second - first;
}

function compareByString(
  firstStudent:string,
  secondStudent:string,
  order?:string,
):number {
  if (order === 'asc') {
    return firstStudent.localeCompare(secondStudent);
  }

  return secondStudent.localeCompare(firstStudent);
}

function compareByNumber(
  firstStudent:number,
  secondStudent:number,
  order?:string,
):number {
  if (order === 'asc') {
    return firstStudent - secondStudent;
  }

  return secondStudent - firstStudent;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const studentsCopy:Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((studentA:Student, studentB:Student) => (
        compareByString(studentA.name, studentB.name, order)
      ));

      break;

    case SortType.Surname:
      studentsCopy.sort((studentA:Student, studentB:Student) => (
        compareByString(studentA.surname, studentB.surname, order)
      ));

      break;

    case SortType.Age:
      studentsCopy.sort((studentA:Student, studentB:Student) => (
        compareByNumber(studentA.age, studentB.age, order)
      ));

      break;

    case SortType.Married:
      studentsCopy.sort((studentA:Student, studentB:Student) => (
        compareByNumber(+studentA.married, +studentB.married, order)
      ));

      break;

    case SortType.AverageGrade:

      studentsCopy.sort((studentA:Student, studentB:Student) => (
        getAverage(studentA.grades, studentB.grades, order)
      ));

      break;

    default:
      throw new Error('Wrong sorted type');
  }

  return studentsCopy;
}
