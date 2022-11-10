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
)
  : object {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        sortedStudents.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }

      if (order === 'desc') {
        sortedStudents.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      break;

    case SortType.Surname:
      if (order === 'asc') {
        sortedStudents.sort((a, b) => {
          return a.surname.localeCompare(b.surname);
        });
      }

      if (order === 'desc') {
        sortedStudents.sort((a, b) => {
          return b.surname.localeCompare(a.surname);
        });
      }

      break;

    case SortType.Age:
      if (order === 'asc') {
        sortedStudents.sort((a, b) => {
          return a.age - b.age;
        });
      }

      if (order === 'desc') {
        sortedStudents.sort((a, b) => {
          return b.age - a.age;
        });
      }

      break;

    case SortType.Married:
      if (order === 'asc') {
        sortedStudents.sort((a, b) => {
          return +a.married - +b.married;
        });
      }

      if (order === 'desc') {
        sortedStudents.sort((a, b) => {
          return +b.married - +a.married;
        });
      }

      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        sortedStudents.sort((a, b) => {
          return a.grades.reduce((prev, cur) => prev + cur, 0) / a.grades.length
            - b.grades.reduce((prev, cur) => prev + cur, 0) / b.grades.length;
        });
      }

      if (order === 'desc') {
        sortedStudents.sort((a, b) => {
          return b.grades.reduce((prev, cur) => prev + cur, 0) / b.grades.length
            - a.grades.reduce((prev, cur) => prev + cur, 0) / a.grades.length;
        });
      }

      break;

    default:
      throw new Error('Why? I thought TS will handle it');
  }

  return sortedStudents;
}
