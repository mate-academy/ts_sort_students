
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
    switch (true) {
      case sortBy === SortType.Surname:
        dublicate.sort((a, b) => a.surname.localeCompare(b.surname));
        break;

      case sortBy === SortType.Name:
        dublicate.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case sortBy === SortType.Married:
        dublicate
          .sort((a, b) => String(b.married).localeCompare(String(a.married)));
        break;

      case sortBy === SortType.AverageGrade:
        dublicate.sort((a, b) => average(a.grades) - average(b.grades));
        break;

      default:
    }
  } else {
    switch (true) {
      case sortBy === SortType.Surname:
        dublicate.sort((a, b) => b.surname.localeCompare(a.surname));
        break;

      case sortBy === SortType.Name:
        dublicate.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case sortBy === SortType.Married:
        dublicate
          .sort((a, b) => String(b.married).localeCompare(String(a.married)));
        break;

      case sortBy === SortType.AverageGrade:
        dublicate.sort((a, b) => average(b.grades) - average(a.grades));
        break;

      default:
    }
  }

  return dublicate;
}
