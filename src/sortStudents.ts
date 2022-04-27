
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function getAvarage(arr: number[]): number {
  return arr.reduce((acc: number, cur: number): number => acc + cur)
    / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  if (sortBy === SortType.Name) {
    sortedStudents.sort((a, b) => {
      return order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  }

  if (sortBy === SortType.Surname) {
    sortedStudents.sort((a, b) => {
      return order === 'asc'
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname);
    });
  }

  if (sortBy === SortType.Age) {
    sortedStudents.sort((a, b) => {
      return order === 'asc'
        ? a.age - b.age
        : b.age - a.age;
    });
  }

  if (sortBy === SortType.Married) {
    sortedStudents.sort((a, b) => {
      return order === 'asc'
        ? +a.married - +b.married
        : +b.married - +a.married;
    });
  }

  if (sortBy === SortType.AverageGrade) {
    sortedStudents.sort((a, b) => {
      return order === 'asc'
        ? getAvarage(a.grades) - getAvarage(b.grades)
        : getAvarage(b.grades) - getAvarage(a.grades);
    });
  }

  return sortedStudents;
}
