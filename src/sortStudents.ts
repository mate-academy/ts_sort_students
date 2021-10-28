// import { type } from "os"

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades:number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function isAscending(order:SortOrder):boolean {
  return order === 'asc';
}

function getAverageGrade(numbers:number[]):number {
  return numbers
    .reduce((acc:number, curr:number) => acc + curr) / numbers.length;
}

type CallBack = (el1:Student, el2:Student,) => number;

function sortByName(order:boolean):CallBack {
  return function callback(student1:Student, student2:Student):number {
    return order
      ? student1.name.localeCompare(student2.name)
      : student2.name.localeCompare(student1.name);
  };
}

function sortBySurname(order:boolean):CallBack {
  return function callback(student1:Student, student2:Student):number {
    return order
      ? student1.surname.localeCompare(student2.surname)
      : student2.surname.localeCompare(student1.surname);
  };
}

function sortByAge(order:boolean):CallBack {
  return function callback(student1: Student, student2: Student):number {
    return order
      ? student1.age - student2.age
      : student2.age - student1.age;
  };
}

function sortByMarriage(order:boolean):CallBack {
  return function callback(student1: Student, student2: Student):number {
    return order
      ? Number(student1.married) - Number(student2.married)
      : Number(student2.married) - Number(student1.married);
  };
}

function sortByAverageGrade(order: boolean):CallBack {
  return function callback(student1: Student, student2: Student):number {
    return order
      ? getAverageGrade(student1.grades) - getAverageGrade(student2.grades)
      : getAverageGrade(student2.grades) - getAverageGrade(student1.grades);
  };
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const studentsCopy:Student[] = students
    .map((student:Student) => ({ ...student }));

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort(sortByName(isAscending(order)));
      break;

    case SortType.Surname:
      studentsCopy.sort(sortBySurname(isAscending(order)));
      break;

    case SortType.Age:
      studentsCopy.sort(sortByAge(isAscending(order)));
      break;

    case SortType.Married:
      studentsCopy.sort(sortByMarriage(isAscending(order)));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort(sortByAverageGrade(isAscending(order)));
      break;

    default:
      break;
  }

  return studentsCopy;
}
