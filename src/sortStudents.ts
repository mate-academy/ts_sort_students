
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
  const studentsCopy = [...students];

  function getAverageGrade(grades: number[]): number {
    return grades.reduce((a: number, b: number) => a + b, 0) / grades.length;
  }

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        studentsCopy.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case SortType.Surname:
        studentsCopy.sort((a, b) => a.surname.localeCompare(b.surname));
        break;

      case SortType.Age:
        studentsCopy.sort((a, b) => a.age - b.age);
        break;

      case SortType.Married:
        studentsCopy.sort((a, b) => Number(a.married) - Number(b.married));
        break;

      case SortType.AverageGrade:
        studentsCopy.sort((a, b) => getAverageGrade(a.grades)
          - getAverageGrade(b.grades));
        break;
      default:
        break;
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
        studentsCopy.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case SortType.Surname:
        studentsCopy.sort((a, b) => b.surname.localeCompare(a.surname));
        break;

      case SortType.Age:
        studentsCopy.sort((a, b) => b.age - a.age);
        break;

      case SortType.Married:
        studentsCopy.sort((a, b) => Number(b.married) - Number(a.married));
        break;

      case SortType.AverageGrade:
        studentsCopy.sort((a, b) => getAverageGrade(b.grades)
          - getAverageGrade(a.grades));
        break;
      default:
        break;
    }
  }

  return studentsCopy;
}
