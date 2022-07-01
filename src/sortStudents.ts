
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, current) => sum + current, 0) / grades.length;
}

function sortByName(students: Student[], order: string): Student[] {
  if (order === 'asc') {
    return students.sort((prev, next) => prev.name
      .localeCompare(next.name));
  }

  return students
    .sort((prev, next) => next.name.localeCompare(prev.name));
}

function sortBySurname(students: Student[], order: string): Student[] {
  if (order === 'asc') {
    return students.sort((prev, next) => prev.surname
      .localeCompare(next.surname));
  }

  return students
    .sort((prev, next) => next.surname.localeCompare(prev.surname));
}

function sortByAverageGrade(
  students: Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return students
      .sort((prev, next) => getAverageGrade(prev.grades)
        - getAverageGrade(next.grades));
  }

  return students.sort((prev, next) => getAverageGrade(next.grades)
    - getAverageGrade(prev.grades));
}

function sortByAge(students : Student[], order: string): Student[] {
  if (order === 'asc') {
    return students.sort((prev, next) => prev.age - next.age);
  }

  return students.sort((prev, next) => next.age - prev.age);
}

function sortByMarried(
  students: Student[],
  order: string,
): Student[] {
  if (order === 'asc') {
    return students.sort((prev, next) => {
      return Number(prev.married) - Number(next.married);
    });
  }

  return students.sort((prev, next) => {
    return Number(next.married) - Number(prev.married);
  });
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrStudent: Student[] = [...students];

  switch (sortBy) {
    case (SortType.Name):
      return sortByName(arrStudent, order);

    case (SortType.Surname):
      return sortBySurname(arrStudent, order);

    case (SortType.Age):
      return sortByAge(arrStudent, order);

    case (SortType.AverageGrade):
      return sortByAverageGrade(arrStudent, order);

    case (SortType.Married):
      return sortByMarried(arrStudent, order);

    default:
      break;
  }

  return arrStudent;
}
