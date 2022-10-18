// import { cursorTo } from "readline";

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade?: number;
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
  const sortedStudents: Student[] = students.map((student) => {
    return { ...student };
  });

  for (let i = 0; i < sortedStudents.length; i += 1) {
    sortedStudents[i].averageGrade = sortedStudents[i].grades.reduce(
      (sum: number, grade: number) => {
        return sum + grade;
      }, 0,
    ) / sortedStudents[i].grades.length;
  }

  switch (sortBy) {
    case 'NAME':
      return sortedStudents.sort((previous, current) => {
        if (order === 'asc') {
          return previous.name.localeCompare(current.name);
        }

        return -previous.name.localeCompare(current.name);
      });
    case 'SURNAME':
      return sortedStudents.sort((previous, current) => {
        if (order === 'asc') {
          return previous.surname.localeCompare(current.surname);
        }

        return -previous.surname.localeCompare(current.surname);
      });
    case 'AGE':
      return sortedStudents.sort((previous, current) => {
        if (order === 'asc') {
          return previous.age - current.age;
        }

        return current.age - previous.age;
      });
    case 'MARRIED':
      return sortedStudents.sort((previous, current) => {
        if (order === 'asc') {
          return Number(previous.married) - Number(current.married);
        }

        return Number(current.married) - Number(previous.married);
      });
    case 'AVERAGEGRADE':
      return sortedStudents.sort((previous, current) => {
        if (order === 'asc' && previous.averageGrade && current.averageGrade) {
          return previous.averageGrade - current.averageGrade;
        }

        if (previous.averageGrade && current.averageGrade) {
          return current.averageGrade - previous.averageGrade;
        }

        return 0;
      });
    default:
      return sortedStudents;
  }
}
