
export interface Student {
  name:string;
  surname:string;
  age:number;
  married:boolean;
  grades:number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[], sortBy:SortType, order:SortOrder,
):object[] {
  return [...students].sort((a:Student, b:Student):number => {
    switch (sortBy) {
      case SortType.Age:
        if (order === 'asc') {
          return a.age - b.age;
        }

        if (order === 'desc') {
          return b.age - a.age;
        }

        break;
      case SortType.Surname:
        return (a.surname > b.surname) ? 1 : -1;

      case SortType.Married:
        if (order === 'asc') {
          return Number(a.married) - Number(b.married);
        }

        if (order === 'desc') {
          return Number(b.married) - Number(a.married);
        }
        break;

      case SortType.AverageGrade: {
        const firstAvg:number = a.grades.reduce((prev, curr) => (
          prev + curr
        ), 0) / a.grades.length;
        const secondAvg:number = b.grades.reduce((prev, curr) => (
          prev + curr
        ), 0) / b.grades.length;

        if (order === 'asc') {
          return firstAvg - secondAvg;
        }

        if (order === 'desc') {
          return secondAvg - firstAvg;
        }
        break;
      }

      default:
        if (order === 'asc') {
          return (a.name > b.name) ? 1 : -1;
        }

        if (order === 'desc') {
          return (b.name > a.name) ? 1 : -1;
        }
    }

    return (a[SortType.Name] > b[SortType.Name]) ? 1 : -1;
  });
}
