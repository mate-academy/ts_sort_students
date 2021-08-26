/* eslint-disable max-len */
interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export function sortStudents(students: Student[], sortBy: SortType, order: string): Student[] {
  let sortedArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        sortedArray.sort((a: Student, b: Student) => a.name.localeCompare(b.name));
      } else {
        sortedArray.sort((a: Student, b: Student) => a.name.localeCompare(b.name)).reverse();
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        sortedArray.sort((a: Student, b: Student) => a.surname.localeCompare(b.surname));
      } else {
        sortedArray.sort((a: Student, b: Student) => a.surname.localeCompare(b.surname)).reverse();
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        sortedArray.sort((a: Student, b: Student) => a.age - b.age);
      } else {
        sortedArray.sort((a: Student, b: Student) => b.age - a.age);
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        sortedArray.sort((a: Student, b: Student) => +a.married - +b.married);
      } else {
        sortedArray.sort((a: Student, b: Student) => +b.married - +a.married);
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedArray = students.sort((a: Student, b: Student) => (
          (a.grades.reduce((t: number, u: number) => t + u) / a.grades.length) - (b.grades.reduce((t: number, u: number) => t + u) / b.grades.length)));
      } else {
        sortedArray = students.sort((a: Student, b: Student) => (
          (b.grades.reduce((t: number, u: number) => t + u) / b.grades.length) - (a.grades.reduce((t: number, u: number) => t + u) / a.grades.length)));
      }
      break;

    default:
      return [];
  }

  return sortedArray;
}
