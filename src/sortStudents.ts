
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

const averageGrade = (student: Student): number => {
  return student.grades.reduce((
    sum: number,
    grades: number,
  ): number => (sum + grades)) / student.grades.length;
};

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? studentCopy.sort((first, second) => (
          first.name.localeCompare(second.name)))
        : studentCopy.sort((first, second) => (
          second.name.localeCompare(first.name)));

    case SortType.Surname:
      return order === 'asc'
        ? studentCopy.sort((first, second) => (
          first.surname.localeCompare(second.surname)))
        : studentCopy.sort((first, second) => (
          second.surname.localeCompare(first.surname)));

    case SortType.Age:
      return order === 'asc'
        ? studentCopy.sort((first, second) => (
          first.age - second.age))
        : studentCopy.sort((first, second) => (
          second.age - first.age));

    case SortType.Married:
      return order === 'asc'
        ? studentCopy.sort((first, second) => (
          Number(first.married) - Number(second.married)))
        : studentCopy.sort((first, second) => (
          Number(second.married) - Number(first.married)));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentCopy.sort((first, second) => (
          averageGrade(first) - averageGrade(second)))
        : studentCopy.sort((first, second) => (
          averageGrade(second) - averageGrade(first)));

    default:
      return [];
  }
}
