
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: false;
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

const averageGrade = (array: number[]): number => (
  array.reduce((a, b) => a + b, 0) / array.length);

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case (SortType.Name):
      copyStudents.sort((a, b) => b.name.localeCompare(a.name));
      break;

    case (SortType.Surname):
      copyStudents.sort((a, b) => b.surname.localeCompare(a.surname));
      break;

    case (SortType.Age):
      copyStudents.sort((a, b) => b.age - a.age);
      break;

    case (SortType.Married):
      copyStudents.sort((a, b) => +b.married - +a.married);
      break;

    case (SortType.AverageGrade):
      copyStudents.sort((a, b) => averageGrade(b.grades) - averageGrade(a.grades));
      break;

    default:
      break;
  }

  return order === 'asc' ? copyStudents.reverse() : copyStudents;
}
