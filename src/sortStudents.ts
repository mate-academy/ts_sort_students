
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

export type SortOrder = 'asc'|'desc';

function getAverageGrades(studentGrades: number[]): number {
  return studentGrades.reduce((sum, a) => sum + a, 0) / studentGrades.length;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrSortStudents: Student[] = Object.assign([], students);

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? arrSortStudents.sort((a, b) => a.name.localeCompare(b.name))
        : arrSortStudents.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return order === 'asc'
        ? arrSortStudents.sort((a, b) => a.surname.localeCompare(b.surname))
        : arrSortStudents.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return order === 'asc'
        ? arrSortStudents.sort((a, b) => a.age - b.age)
        : arrSortStudents.sort((a, b) => b.age - a.age);

    case SortType.Married:
      return order === 'asc'
        ? arrSortStudents.sort((a, b) => Number(a.married) - Number(b.married))
        : arrSortStudents.sort((a, b) => Number(b.married) - Number(a.married));

    case SortType.AverageGrade:
      return order === 'asc'
        ? arrSortStudents.sort((a, b) => (
          getAverageGrades(a.grades) - getAverageGrades(b.grades)))
        : arrSortStudents.sort((a, b) => (
          getAverageGrades(b.grades) - getAverageGrades(a.grades)));

    default:
      break;
  }

  return arrSortStudents;
}
