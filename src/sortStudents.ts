
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let result: Student[];
  let resultUnmarried: Student[];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'desc') {
        result = [...students].sort((a, b) => b.name.localeCompare(a.name));
        break;
      }
      result = [...students].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case SortType.Surname:
      if (order === 'desc') {
        result = [...students]
          .sort((a, b) => b.surname.localeCompare(a.surname));
        break;
      }
      result = [...students].sort((a, b) => a.surname.localeCompare(b.surname));
      break;
    case SortType.Age:
      if (order === 'desc') {
        result = [...students].sort((a, b) => b.age - a.age);
        break;
      }
      result = [...students].sort((a, b) => a.age - b.age);
      break;
    case SortType.Married:
      result = [...students].filter((a) => a.married);
      resultUnmarried = [...students].filter((a) => !a.married);
      result = result.concat(resultUnmarried);
      break;
    case SortType.AverageGrade:
      if (order === 'desc') {
        result = [...students].sort((a, b) => (
          b.grades.reduce((sum, n) => (sum + n)) / b.grades.length) - (
          a.grades.reduce((sum, n) => (sum + n)) / a.grades.length));
        break;
      }

      result = [...students].sort((a, b) => (
        a.grades.reduce((sum, n) => (sum + n)) / a.grades.length) - (
        b.grades.reduce((sum, n) => (sum + n)) / b.grades.length));
      break;
    default:
  }

  return result;
}
