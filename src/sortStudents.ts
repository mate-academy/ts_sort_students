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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      result.sort((a, b) => {
        return (order === 'asc')
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
      break;

    case SortType.Surname:
      result.sort((a, b) => {
        return (order === 'asc')
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      });
      break;

    case SortType.Age:
      result.sort((a, b) => {
        return (order === 'asc')
          ? a.age - b.age
          : b.age - a.age;
      });
      break;

    case SortType.Married:
      result.sort((a, b) => {
        return (order === 'asc')
          ? +a.married - +b.married
          : +b.married - +a.married;
      });
      break;

    case SortType.AverageGrade:
      result.sort((a, b) => {
        const itemOne = a.grades.reduce((prev, current) => prev + current, 0)
        / a.grades.length;
        const itemTwo = b.grades.reduce((prev, current) => prev + current, 0)
        / b.grades.length;

        return (order === 'asc')
          ? itemOne - itemTwo
          : itemTwo - itemOne;
      });
      break;

    default:
      break;
  }

  return result;
}
