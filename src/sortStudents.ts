export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

function countAverage(grades: Array<number>): number {
  const countSum: number = grades.reduce((elem, val) => elem + val);
  const countAve: number = countSum / grades.length;

  return countAve;
}

export function sortStudents(students: Array<Student>,
  sortBy: SortType, order: SortOrder): Array<Student> {
  let sortedStudents: Array<Student> = [];

  switch (sortBy) {
    case SortType.Name:
      sortedStudents = [...students].sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);
      });
      break;

    case SortType.Surname:
      sortedStudents = [...students].sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        return b.surname.localeCompare(a.surname);
      });
      break;

    case SortType.Age:
      sortedStudents = [...students].sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;
      });
      break;

    case SortType.Married:
      sortedStudents = [...students].sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return Number(a.married) - Number(b.married);
        }

        return Number(b.married) - Number(a.married);
      });
      break;

    case SortType.AverageGrade:
      sortedStudents = [...students].sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return countAverage(a.grades) - countAverage(b.grades);
        }

        return countAverage(b.grades) - countAverage(a.grades);
      });
      break;

    default:
      break;
  }

  return sortedStudents;
}
