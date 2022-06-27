
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
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        copy.sort((std1, std2) => std1.name.localeCompare(std2.name));
      } else {
        copy.sort((std1, std2) => std2.name.localeCompare(std1.name));
      }

      break;
    case SortType.Surname:
      if (order === 'asc') {
        copy.sort((std1, std2) => std1.surname.localeCompare(std2.surname));
      } else {
        copy.sort((std1, std2) => std2.surname.localeCompare(std1.surname));
      }

      break;

    case SortType.Age:
      if (order === 'asc') {
        copy.sort((std1, std2) => std1.age - std2.age);
      } else {
        copy.sort((std1, std2) => std2.age - std1.age);
      }

      break;

    case SortType.Married:
      if (order === 'asc') {
        copy.sort((std1, std2) => Number(std1.married) - Number(std2.married));
      } else {
        copy.sort((std1, std2) => Number(std2.married) - Number(std1.married));
      }

      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        copy.sort((std1, std2) => getAverageGrade(std1.grades)
          - getAverageGrade(std2.grades));
      } else {
        copy.sort((std1, std2) => getAverageGrade(std2.grades)
        - getAverageGrade(std1.grades));
      }

      break;

    default:

      break;
  }

  return copy;
}
