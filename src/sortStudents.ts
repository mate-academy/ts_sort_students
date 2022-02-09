/* eslint-disable no-console */

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
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
      sorted
        .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]));
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
        return order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
      });

      return sorted;

    case SortType.Surname:
      sorted
        .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]));
      break;

    case SortType.Married:
      return order === 'asc'
        ? sorted.sort((a: Student, b: Student) => {
          const first = a[sortBy] ? 1 : 0;
          const second = b[sortBy] ? 1 : 0;

          return first - second;
        })
        : sorted.sort((a: Student, b: Student) => {
          const first = b[sortBy] ? 1 : 0;
          const second = a[sortBy] ? 1 : 0;

          return first - second;
        });

    default:
      throw new Error('please input correct SortType :)');
  }

  return order === 'asc' ? sorted : sorted.reverse();
}
