
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(
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

  return order === 'asc'
    ? first - second
    : second - first;
}

function compareByString(
  firstStudent:string,
  secondStudent:string,
  order?:string,
):number {
  return order === 'asc'
    ? firstStudent.localeCompare(secondStudent)
    : secondStudent.localeCompare(firstStudent);
}

function compareByNumber(
  firstStudent:number,
  secondStudent:number,
  order?:string,
):number {
  return order === 'asc'
    ? firstStudent - secondStudent
    : secondStudent - firstStudent;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const studentsCopy:Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((studentA:Student, studentB:Student) => (
        compareByString(studentA[sortBy], studentB[sortBy], order)
      ));

      break;

    case SortType.Age:
      studentsCopy.sort((studentA:Student, studentB:Student) => (
        compareByNumber(studentA.age, studentB.age, order)
      ));

      break;

    case SortType.Married:
      studentsCopy.sort((studentA:Student, studentB:Student) => (
        compareByNumber(
          Number(studentA.married),
          Number(studentB.married),
          order,
        )
      ));

      break;

    case SortType.AverageGrade:

      studentsCopy.sort((studentA:Student, studentB:Student) => (
        getAverageGrade(studentA.grades, studentB.grades, order)
      ));

      break;

    default:
      throw new Error('Wrong sorted type');
  }

  return studentsCopy;
}
