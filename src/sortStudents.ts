export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

function average(array: number[]): number {
  const sum = array.reduce(
    (accamulator, currentValue) => accamulator + currentValue,
  );

  return sum / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return newArray.sort((a, b) => a.name.localeCompare(b.name));
      }

      return newArray.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      if (order === 'asc') {
        return newArray.sort((a, b) => a.surname.localeCompare(b.surname));
      }

      return newArray.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      if (order === 'asc') {
        return newArray.sort((a, b) => a.age - b.age);
      }

      return newArray.sort((a, b) => b.age - a.age);

    case SortType.Married:
      if (order === 'asc') {
        return newArray.sort((a, b) => +a.married - +b.married);
      }

      return newArray.sort((a, b) => +b.married - +a.married);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return newArray.sort(
          (a, b) => (average(a.grades)) - (average(b.grades)),
        );
      }

      return newArray.sort(
        (a, b) => (average(b.grades)) - average(a.grades),
      );

    default: return newArray;
  }
}
