/* eslint-disable no-console */

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
type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sorted: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      sorted.sort((a: Student, b: Student) => a.name.localeCompare(b.name));
      break;

    case SortType.AverageGrade:
      sorted
        .sort((a: Student, b: Student) => {
          const averageFirst = a.grades
            .reduce((cur, sum) => sum + cur) / a.grades.length;
          const averageSecond = b.grades
            .reduce((cur, sum) => sum + cur) / b.grades.length;

          return order === 'asc'
            ? averageFirst - averageSecond
            : averageSecond - averageFirst;
        });

      return sorted;

    case SortType.Age:
      sorted.sort((a: Student, b: Student) => {
        return order === 'asc' ? a.age - b.age : b.age - a.age;
      });

      return sorted;

    case SortType.Surname:
      sorted
        .sort((a: Student, b: Student) => a.surname.localeCompare(b.surname));
      break;

    case SortType.Married:
      return order === 'asc'
        ? sorted.sort((a: Student, b: Student) => {
          const first = a.married ? 1 : 0;
          const second = b.married ? 1 : 0;

          return first - second;
        })
        : sorted.sort((a: Student, b: Student) => {
          const first = b.married ? 1 : 0;
          const second = a.married ? 1 : 0;

          return first - second;
        });

    default:
      throw new Error('please input correct SortType :)');
  }

  return order === 'asc' ? sorted : sorted.reverse();
}
