
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
  const average: (arr: number[]) => number
    = (arr) => arr.reduce((sum, el) => sum + el) / arr.length;

  const actions: {[name: string]: () => Student[]} = {
    [SortType.Name]: (): Student[] => {
      return order === 'asc'
        ? [...students].sort((a, b) => a.name.localeCompare(b.name))
        : [...students].sort((b, a) => a.name.localeCompare(b.name));
    },
    [SortType.Surname]: (): Student[] => {
      return order === 'asc'
        ? [...students].sort((a, b) => a.surname.localeCompare(b.surname))
        : [...students].sort((b, a) => a.surname.localeCompare(b.surname));
    },
    [SortType.Age]: (): Student[] => {
      return order === 'asc'
        ? [...students].sort((a, b) => a.age - b.age)
        : [...students].sort((b, a) => a.age - b.age);
    },
    [SortType.Married]: (): Student[] => {
      return order === 'asc'
        ? [...students].sort((a, b) => +a.married - +b.married)
        : [...students].sort((b, a) => +a.married - +b.married);
    },
    [SortType.AverageGrade]: (): Student[] => {
      return order === 'asc'
        ? [...students].sort((a, b) => average(a.grades) - average(b.grades))
        : [...students].sort((b, a) => average(a.grades) - average(b.grades));
    },
  };

  return actions[sortBy]();
}
