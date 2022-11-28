
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

export function
sortStudents(students: Student[], sortBy: SortType, order: SortOrder)
  : Student[] {
  const dublicate = [...students];

  function average(array: number[]): number {
    const sum = array.reduce((prev, current) => prev + current);

    return sum / array.length;
  }

  if (order === 'asc') {
    if (sortBy === SortType.Surname) {
      dublicate.sort((a, b) => a.surname.localeCompare(b.surname));
    }

    if (sortBy === SortType.Name) {
      dublicate.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === SortType.Age) {
      dublicate.sort((a, b) => a.age - b.age);
    }

    if (sortBy === SortType.Married) {
      dublicate
        .sort((a, b) => String(b.married).localeCompare(String(a.married)));
    }

    if (sortBy === SortType.AverageGrade) {
      dublicate.sort((a, b) => average(a.grades) - average(b.grades));
    }
  } else {
    if (sortBy === SortType.Surname) {
      dublicate.sort((a, b) => b.surname.localeCompare(a.surname));
    }

    if (sortBy === SortType.Name) {
      dublicate.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (sortBy === SortType.Age) {
      dublicate.sort((a, b) => b.age - a.age);
    }

    if (sortBy === SortType.Married) {
      dublicate
        .sort((a, b) => String(b.married).localeCompare(String(a.married)));
    }

    if (sortBy === SortType.AverageGrade) {
      dublicate.sort((a, b) => average(b.grades) - average(a.grades));
    }
  }

  return dublicate;
}
