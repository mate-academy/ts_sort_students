
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  return [...students].sort((a, b) => {
    const firstAverage = a.grades.reduce((acc, curr) => acc + curr, 0)
      / a.grades.length;
    const secondAverage = b.grades.reduce((acc, curr) => acc + curr, 0)
      / b.grades.length;

    switch (sortBy) {
      case SortType.Name:
        if (a.name > b.name) {
          return order === 'asc' ? 1 : -1;
        }

        if (a.name < b.name) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      case SortType.Surname:
        if (a.surname > b.surname) {
          return order === 'asc' ? 1 : -1;
        }

        if (a.surname < b.surname) {
          return order === 'asc' ? -1 : 1;
        }

        return 0;
      case SortType.Age:
        return order === 'asc' ? a.age - b.age : b.age - a.age;
      case SortType.Married:
        return order === 'asc'
          ? +a.married - +b.married : +b.married - +a.married;
      default:
        return order === 'asc'
          ? firstAverage - secondAverage : secondAverage - firstAverage;
    }
  });
}
