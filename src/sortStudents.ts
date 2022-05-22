
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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const res = [...students];

  function averageGrades(arr: number[]): number {
    return arr.reduce((a: number, b: number) => a + b, 0) / arr.length;
  }

  switch (sortBy) {
    case SortType.Name:
      res.sort((st1, st2) => {
        return order === 'desc'
          ? st2.name.localeCompare(st1.name)
          : st1.name.localeCompare(st2.name);
      });
      break;
    case SortType.Surname:
      res.sort((st1, st2) => {
        return order === 'asc'
          ? st1.surname.localeCompare(st2.surname)
          : st2.surname.localeCompare(st1.surname);
      });
      break;
    case SortType.Age:
      res.sort((st1, st2) => {
        return order === 'asc'
          ? st1.age - st2.age
          : st2.age - st1.age;
      });
      break;
    case SortType.Married:
      res.sort((st1, st2) => {
        return order === 'desc'
          ? +st2.married - +st1.married
          : +st1.married - +st2.married;
      });
      break;
    case SortType.AverageGrade:
      res.sort((st1, st2) => {
        return order === 'asc'
          ? averageGrades(st1.grades) - averageGrades(st2.grades)
          : averageGrades(st2.grades) - averageGrades(st1.grades);
      });
      break;
    default: return [];
  }

  return res;
}
