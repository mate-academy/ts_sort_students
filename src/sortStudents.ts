
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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let resultSt: Student[] = [];

  switch (sortBy) {
    case SortType.Age:
      resultSt = [...students].sort((a: Student, b: Student) => {
        const numA: number = a.age;
        const numB: number = b.age;

        if (order === 'asc') {
          return numA - numB;
        }

        return numB - numA;
      });
      break;

    case SortType.Name:
      resultSt = [...students].sort((a: Student, b: Student) => {
        let stringA: string;
        let stringB: string;

        if (order === 'asc') {
          stringA = a.name;
          stringB = b.name;
        } else {
          stringA = b.name;
          stringB = a.name;
        }

        if (stringA > stringB) {
          return 1;
        }

        if (stringA === stringB) {
          return 0;
        }

        return -1;
      });
      break;

    case SortType.Surname:
      resultSt = [...students].sort((a: Student, b: Student) => {
        let stringA: string;
        let stringB: string;

        if (order === 'asc') {
          stringA = a.surname;
          stringB = b.surname;
        } else {
          stringA = b.surname;
          stringB = a.surname;
        }

        if (stringA > stringB) {
          return 1;
        }

        if (stringA === stringB) {
          return 0;
        }

        return -1;
      });
      break;

    case SortType.Married:
      resultSt = [...students].sort((a: Student, b: Student) => {
        const numA: number = +a.married;
        const numB: number = +b.married;

        if (order === 'asc') {
          return numA - numB;
        }

        return numB - numA;
      });
      break;

    case SortType.AverageGrade:
      resultSt = [...students].sort((a: Student, b: Student) => {
        const numA: number = (a.grades.reduce(
          (accumulator, currentValue) => accumulator + currentValue, 0,
        )) / a.grades.length;

        const numB: number = (b.grades.reduce(
          (accumulator, currentValue) => accumulator + currentValue, 0,
        )) / b.grades.length;

        if (order === 'asc') {
          return numA - numB;
        }

        return numB - numA;
      });
      break;

    default:
      break;
  }

  return resultSt;
}
