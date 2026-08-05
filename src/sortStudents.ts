
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
export type SortOrder = 'asc'| 'desc';

function avg(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function compareStrings(a: string, b: string, order: SortOrder): number {
  return order === 'asc'
    ? a.localeCompare(b)
    : b.localeCompare(a);
}

function compareNumbers(a: number, b: number, order: SortOrder): number {
  return order === 'asc' ? a - b : b - a;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];

  switch (sortBy) {
    case SortType.Name:
      result.sort((a, b) => (compareStrings(a.name, b.name, order)));
      break;

    case SortType.Surname:
      result.sort((a, b) => (compareStrings(a.surname, b.surname, order)));
      break;

    case SortType.Age:
      result.sort((a, b) => (compareNumbers(a.age, b.age, order)));
      break;

    case SortType.Married:
      result.sort((a, b) => (order === 'asc'
        ? Number(a.married) - Number(b.married)
        : Number(b.married) - Number(a.married)));
      break;

    case SortType.AverageGrade:
      result.sort((a, b) => (compareNumbers(
        avg(a.grades),
        avg(b.grades),
        order,
      )));
      break;

    default:
      return result;
  }

  return result;
}
