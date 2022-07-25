
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
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' |'desc';

function getAverage(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    const ascAverage = getAverage(a.grades);
    const descAverage = getAverage(b.grades);

    const firstEl = order === 'asc' ? a : b;
    const secondEl = order === 'asc' ? b : a;

    switch (sortBy) {
      case SortType.Name:
        return firstEl.name.localeCompare(secondEl.name);

      case SortType.Surname:
        return firstEl.surname.localeCompare(secondEl.surname);

      case SortType.Age:
        return firstEl.age - secondEl.age;

      case SortType.Married:
        return Number(firstEl.married) - Number(secondEl.married);

      default:
        return order === 'asc'
          ? ascAverage - descAverage : descAverage - ascAverage;
    }
  });
}
