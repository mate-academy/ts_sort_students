
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
      case SortType.Name:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return order === 'asc' ? a.age - b.age : b.age - a.age;

      case SortType.Married:
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);

      default: {
        const firstAvg:number = a.grades.reduce((prev, curr) => (
          prev + curr
        ), 0) / a.grades.length;
        const secondAvg:number = b.grades.reduce((prev, curr) => (
          prev + curr
        ), 0) / b.grades.length;

        return order === 'asc'
          ? firstAvg - secondAvg
          : secondAvg - firstAvg;
      }
    }
  });
}
