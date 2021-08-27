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
    case SortType.Surname:
    case SortType.Married:
      copyStudents.sort((prev, next) => {
        const [A, B] = order === 'asc' ? [prev, next] : [next, prev];

        return (`${A[sortBy]}`.localeCompare(`${B[sortBy]}`));
      });
      break;

    case SortType.Age:
      copyStudents.sort((prev, next) => {
        const [A, B] = order === 'asc' ? [prev, next] : [next, prev];

        return (A[sortBy] - B[sortBy]);
      });
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
