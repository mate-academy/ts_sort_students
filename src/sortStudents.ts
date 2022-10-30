// import { cursorTo } from "readline";

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'NAME',
  Surname = 'SURNAME',
  Age = 'AGE',
  Married = 'MARRIED',
  AverageGrade = 'AVERAGEGRADE',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = students.map((student) => (
    { ...student }
  ));
  const averageGrade = (grades: number[]): number => (
    grades.reduce(
      (sum: number, grade: number) => {
        return sum + grade;
      }, 0,
    ) / grades.length
  );

  switch (sortBy) {
    case SortType.Name:
      return sortedStudents.sort((previous, current) => {
        if (order === 'asc') {
          return previous.name.localeCompare(current.name);
        }

        return -previous.name.localeCompare(current.name);
      });
    case SortType.Surname:
      return sortedStudents.sort((previous, current) => {
        if (order === 'asc') {
          return previous.surname.localeCompare(current.surname);
        }

        return -previous.surname.localeCompare(current.surname);
      });
    case SortType.Age:
      return sortedStudents.sort((previous, current) => {
        if (order === 'asc') {
          return previous.age - current.age;
        }

        return current.age - previous.age;
      });
    case SortType.Married:
      return sortedStudents.sort((previous, current) => {
        if (order === 'asc') {
          return Number(previous.married) - Number(current.married);
        }

        return Number(current.married) - Number(previous.married);
      });
    case SortType.AverageGrade:
      return sortedStudents.sort((previous, current) => {
        if (order === 'asc' && previous.grades && current.grades) {
          return averageGrade(previous.grades) - averageGrade(current.grades);
        }

        if (previous.grades && current.grades) {
          return averageGrade(current.grades) - averageGrade(previous.grades);
        }

        return 0;
      });
    default:
      return sortedStudents;
  }
}
