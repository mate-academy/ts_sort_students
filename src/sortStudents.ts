function GetAvg(arr:number[]):number {
  return arr.reduce((prev, curr) => (
    prev + curr
  ), 0) / arr.length;
}

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
        return order === 'asc'
          ? GetAvg(a.grades) - GetAvg(b.grades)
          : GetAvg(b.grades) - GetAvg(a.grades);
      }
    }
  });
}
