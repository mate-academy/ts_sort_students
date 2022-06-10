
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
  const result: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      order === 'asc'
        ? result
          .sort((a: Student, b: Student) => (a.name).localeCompare(b.name))
        : result
          .sort((a: Student, b: Student) => (b.name).localeCompare(a.name));
      break;

    case SortType.Surname:
      order === 'asc'
        ? result
          .sort((a: Student, b: Student) => (a.surname)
            .localeCompare(b.surname))
        : result
          .sort((a: Student, b: Student) => (b.surname)
            .localeCompare(a.surname));

      break;

    case SortType.Age:
      order === 'asc'
        ? result
          .sort((a: Student, b: Student) => (a.age) - (b.age))
        : result
          .sort((a: Student, b: Student) => (b.age) - (a.age));

      break;

    case SortType.Married:
      order === 'asc'
        && result
          .sort((a: Student, b: Student) => {
            if (a.married === b.married) {
              return 0;
            }

            if (b.married) {
              return -1;
            }

            return 1;
          });

      result
        .sort((a: Student, b: Student) => {
          if (a.married === b.married) {
            return 0;
          }

          if (a.married) {
            return -1;
          }

          return 1;
        });
      break;

    case SortType.AverageGrade:
      order === 'asc'
        ? result
          .sort((a: Student, b: Student) => (a.grades
            .reduce((x, y) => x + y) / a.grades.length) - (b.grades
            .reduce((x, y) => x + y) / b.grades.length))
        : result
          .sort((a: Student, b: Student) => (b.grades
            .reduce((x, y) => x + y) / b.grades.length) - (a.grades
            .reduce((x, y) => x + y) / a.grades.length));
      break;

    default:
      break;
  }

  return result;
}
