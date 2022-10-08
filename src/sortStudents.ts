// import { type } from "os";

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  Grade = 'grade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => (
        order === 'asc'
          ? firstPerson[sortBy].localeCompare(secondPerson[sortBy])
          : secondPerson[sortBy].localeCompare(firstPerson[sortBy])
      ));
      break;

    case SortType.Age:
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => (
        order === 'asc'
          ? firstPerson.age - secondPerson.age
          : secondPerson.age - firstPerson.age
      ));
      break;

    case SortType.Married:
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => (
        order === 'asc'
          ? +firstPerson.married - +secondPerson.married
          : +secondPerson.married - +firstPerson.married
      ));
      break;

    case SortType.Grade:
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => {
        const firstPersonAvgGrade = firstPerson.grades.reduce(
          (accum: number, curr: number) => accum + curr,
        ) / firstPerson.grades.length;

        const secondPersonAvgGrade = secondPerson.grades.reduce(
          (accum: number, curr: number) => accum + curr,
        ) / secondPerson.grades.length;

        return order === 'asc'
          ? firstPersonAvgGrade - secondPersonAvgGrade
          : secondPersonAvgGrade - firstPersonAvgGrade;
      });
      break;

    default:
      break;
  }

  return studentsCopy;
}
