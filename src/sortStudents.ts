// import { objectExpression } from "@babel/types";
// import { SignatureDeclarationBase } from "typescript";

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

export function sortStudents(students: Student[],
  sortBy: SortType, order: string): Object[] {
  let copy: Array<Student> = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case 0:
        copy.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 1:
        copy.sort((a, b) => a.surname.localeCompare(b.surname));
        break;
      case 4:
        copy.sort((a, b) => {
          const averageA: number
          = a.grades.reduce((sum, x) => sum + x, 0) / a.grades.length;
          const averageB: number
          = b.grades.reduce((sum, y) => sum + y, 0) / b.grades.length;

          return averageA - averageB;
        });
        break;
      default:
        break;
    }
  }

  if (order === 'desc') {
    const marriedPeople: Array<Student> = [];

    switch (sortBy) {
      case 2:
        copy.sort((a, b) => b.age - a.age);
        break;
      case 3:

        for (let i: number = 0; i < copy.length; i += 1) {
          if (copy[i].married) {
            marriedPeople.push(copy[i]);
            copy.splice(i, 1);
          }
        }
        copy = [...marriedPeople, ...copy];
        break;
      case 4:
        copy.sort((a, b) => {
          const averageA: number
          = a.grades.reduce((sum, x) => sum + x, 0) / a.grades.length;
          const averageB: number
          = b.grades.reduce((sum, y) => sum + y, 0) / b.grades.length;

          return averageB - averageA;
        });
        break;
      default:
        break;
    }
  }

  return copy;
}
