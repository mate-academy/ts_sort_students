
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

export type SortOrder = 'asc' | 'desc';

function getAverage(grades: number[]): number {
  const average = grades.reduce((sum, iteracionItem) => sum + iteracionItem, 0);

  return average / grades.length;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = Object.assign([], students);

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? copy.sort((a, b) => a.name.localeCompare(b.name))
        : copy.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((a, b) => a.surname.localeCompare(b.surname))
        : copy.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return order === 'asc'
        ? copy.sort((a, b) => a.age - b.age)
        : copy.sort((a, b) => b.age - a.age);

    case SortType.Married:
      return order === 'asc'
        ? copy.sort((a, b) => Number(a.married) - Number(b.married))
        : copy.sort((a, b) => Number(b.married) - Number(a.married));

    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((a, b) => getAverage(a.grades) - getAverage(b.grades))
        : copy.sort((a, b) => getAverage(b.grades) - getAverage(a.grades));

    default:
      return copy;
  }
}
