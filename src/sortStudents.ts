
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
type SortStudentsFunction =
  (students: Student[], sortBy: SortType, order: SortOrder) => Student[];
type CallBack = (grades1: number[], grades2: number[], order: string) => number;

const SortCallbackByGrades:CallBack = (grades1, grades2, order) => {
  const firstAvgGrade = grades1.reduce((p, c) => p + c, 0)
    / grades1.length;
  const secondAvgGrade = grades2.reduce((p, c) => p + c, 0)
    / grades2.length;

  return order === 'asc'
    ? firstAvgGrade - secondAvgGrade
    : secondAvgGrade - firstAvgGrade;
};

export const sortStudents: SortStudentsFunction = (students, sortBy, order) => {
  const arrayCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      return arrayCopy.sort((a: Student, b: Student) => (
        order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      ));

    case SortType.Surname:
      return arrayCopy.sort((a: Student, b: Student) => (
        order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname)
      ));

    case SortType.Age:
      return arrayCopy.sort((a :Student, b: Student) => (order === 'asc'
        ? a.age - b.age
        : b.age - a.age));

    case SortType.Married:
      return arrayCopy.sort((a :Student, b: Student) => (order === 'asc'
        ? +a.married - (+b.married)
        : +b.married - (+a.married)));

    case SortType.AverageGrade:
      return arrayCopy.sort((a: Student, b: Student) => {
        return SortCallbackByGrades(a.grades, b.grades, order);
      });

    default: return arrayCopy;
  }
};
