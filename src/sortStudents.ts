
export interface Student {
  name: string;
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

export function
sortStudents(students: Student[], sortBy: SortType, order: string): Student[] {
  const copy = [...students];

  if (sortBy === SortType.Name) {
    if (order === 'asc') {
      const result: Student[]
      = copy.sort((a, b) => a.name.localeCompare(b.name));

      return result;
    }

    if (order === 'desc') {
      const result: Student[]
      = copy.sort((a, b) => b.name.localeCompare(a.name));

      return result;
    }
  }

  if (sortBy === SortType.Surname) {
    if (order === 'asc') {
      const result: Student[]
      = copy.sort((a, b) => a.surname.localeCompare(b.surname));

      return result;
    }

    if (order === 'desc') {
      const result: Student[]
      = copy.sort((a, b) => b.surname.localeCompare(a.surname));

      return result;
    }
  }

  if (sortBy === SortType.Age) {
    if (order === 'asc') {
      const result: Student[] = copy.sort((a, b) => a.age - b.age);

      return result;
    }

    if (order === 'desc') {
      const result: Student[] = copy.sort((a, b) => b.age - a.age);

      return result;
    }
  }

  if (sortBy === SortType.Married) {
    if (order === 'asc') {
      const result: Student[]
      = copy.sort((a, b) => Number(a.married) - Number(b.married));

      return result;
    }

    if (order === 'desc') {
      const result: Student[]
      = copy.sort((a, b) => Number(b.married) - Number(a.married));

      return result;
    }
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      const result: Student[]
      = copy.sort((a, b) => (a.grades.reduce((sum, x) => sum + x)
        / a.grades.length)
        - (b.grades.reduce((sum, x) => sum + x) / b.grades.length));

      return result;
    }

    if (order === 'desc') {
      const result: Student[]
      = copy.sort((a, b) => (b.grades.reduce((sum, x) => sum + x)
      / b.grades.length)
      - (a.grades.reduce((sum, x) => sum + x) / a.grades.length));

      return result;
    }
  }

  return copy;
}
