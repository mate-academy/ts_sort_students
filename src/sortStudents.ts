// describe Student type
// create and export SortType enum
// create SortOrder type
import { SortType } from './sortTypes';

type Students = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Students[],
  sortBy: SortType,
  order: SortOrder,
): Students[] {
  // write your function
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        copyStudents.sort((prev, next) => prev.name.localeCompare(next.name));
      } else {
        copyStudents.sort((prev, next) => next.name.localeCompare(prev.name));
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        copyStudents.sort(
          (prev, next) => prev.surname.localeCompare(next.surname),
        );
      } else {
        copyStudents.sort(
          (prev, next) => next.surname.localeCompare(prev.surname),
        );
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        copyStudents.sort((prev, next) => prev.age - next.age);
      } else {
        copyStudents.sort((prev, next) => next.age - prev.age);
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        copyStudents.sort(
          (prev, next) => `${prev.married}`.localeCompare(`${next.married}`),
        );
      } else {
        copyStudents.sort(
          (prev, next) => `${next.married}`.localeCompare(`${prev.married}`),
        );
      }
      break;

    case SortType.AverageGrade:

      if (order === 'asc') {
        copyStudents.sort(
          (prev, next) => prev.grades.reduce((sum, x) => sum + x, 0)
            - next.grades.reduce((sum, x) => sum + x, 0),
        );
      } else {
        copyStudents.sort(
          (prev, next) => next.grades.reduce((sum, x) => sum + x, 0)
            - prev.grades.reduce((sum, x) => sum + x, 0),
        );
      }
      break;

    default:
      break;
  }

  return copyStudents;
}
