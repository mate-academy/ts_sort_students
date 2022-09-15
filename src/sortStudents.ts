
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents = [...students];

  function getAvgGrade(grades: number[]): number {
    return grades
      .reduce((sum: number, acc: number) => sum + acc, 0) / grades.length;
  }

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        return newStudents.sort((a, b) => (a.name.localeCompare(b.name)));

      case SortType.Surname:
        return newStudents.sort((a, b) => (a.surname.localeCompare(b.surname)));

      case SortType.Age:
        return newStudents.sort((a, b) => (a.age - b.age));

      case SortType.Married:
        return newStudents.sort((a, b) => (+a.married - +b.married));

      case SortType.AverageGrade:
        return newStudents
          .sort((a, b) => getAvgGrade(a.grades) - getAvgGrade(b.grades));

      default:
        return [];
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
        return newStudents.sort((a, b) => (b.name.localeCompare(a.name)));

      case SortType.Surname:
        return newStudents.sort((a, b) => (b.surname.localeCompare(a.surname)));

      case SortType.Age:
        return newStudents.sort((a, b) => (b.age - a.age));

      case SortType.Married:
        return newStudents.sort((a, b) => (+b.married - +a.married));

      case SortType.AverageGrade:
        return newStudents
          .sort((a, b) => getAvgGrade(b.grades) - getAvgGrade(a.grades));

      default:
        return [];
    }
  }

  return newStudents;
}
