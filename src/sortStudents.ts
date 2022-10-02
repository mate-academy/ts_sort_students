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
  AverageGrade = 'grade',
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
    case 'name':
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => (
        order === 'asc'
          ? firstPerson.name.localeCompare(secondPerson.name)
          : secondPerson.name.localeCompare(firstPerson.name)
      ));
      break;

    case 'surname':
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => (
        order === 'asc'
          ? firstPerson.surname.localeCompare(secondPerson.surname)
          : secondPerson.surname.localeCompare(firstPerson.surname)
      ));

      break;

    case 'age':
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => (
        order === 'asc'
          ? firstPerson.age - secondPerson.age
          : secondPerson.age - firstPerson.age
      ));
      break;

    case 'married':
      studentsCopy.sort((firstPerson: Student, secondPerson: Student) => (
        order === 'asc'
          ? +firstPerson.married - +secondPerson.married
          : +secondPerson.married - +firstPerson.married
      ));
      break;

    case 'grade':
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
