// import { getDefaultFormatCodeSettings } from "typescript";

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: true,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}
export type SortOrder = 'asc' | 'dsc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        sortedStudents.sort((a: Student, b: Student) => {
          return a.name.localeCompare(b.name);
        });
        break;
      case SortType.Surname:
        sortedStudents.sort((a: Student, b: Student) => {
          return a.surname.localeCompare(b.surname);
        });
        break;
      case SortType.Age:
        sortedStudents.sort((a: Student, b: Student) => a.age - b.age);
        break;
      case SortType.Married:
        sortedStudents.sort((a: Student, b: Student) => {
          if (a.married === b.married) {
            return 0;
          }

          if (a.married) {
            return 1;
          }

          return -1;
        });
        break;
      case SortType.AverageGrade:
        sortedStudents.sort((a: Student, b: Student) => {
          return a.grades.reduce((prev, next) => prev + next) / a.grades.length
            - b.grades.reduce((prev, next) => prev + next) / b.grades.length;
        });
        break;
      default:
        sortedStudents.sort((a: Student, b: Student) => a.age - b.age);
    }
  } else {
    switch (sortBy) {
      case SortType.Name:
        sortedStudents.sort((a: Student, b: Student) => {
          return b.name.localeCompare(a.name);
        });
        break;
      case SortType.Surname:
        sortedStudents.sort((a: Student, b: Student) => {
          return b.surname.localeCompare(a.surname);
        });
        break;
      case SortType.Age:
        sortedStudents.sort((a: Student, b: Student) => b.age - a.age);
        break;
      case SortType.Married:
        sortedStudents.sort((a: Student, b: Student) => {
          if (a.married === b.married) {
            return 0;
          }

          if (b.married) {
            return 1;
          }

          return -1;
        });
        break;
      case SortType.AverageGrade:
        sortedStudents.sort((a: Student, b: Student) => {
          return b.grades.reduce((prev, next) => prev + next) / b.grades.length
          - a.grades.reduce((prev, next) => prev + next) / a.grades.length;
        });
        break;
      default:
        sortedStudents.sort((a: Student, b: Student) => b.age - a.age);
    }
  }

  return sortedStudents;
}
