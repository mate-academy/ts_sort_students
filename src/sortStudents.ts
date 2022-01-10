
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
  const copyStudents: Student[] = students.map((student) => {
    return {
      ...student,
    };
  });

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name: {
        copyStudents.sort((
          a: Student,
          b: Student,
        ) => a.name.localeCompare(b.name));

        break;
      }

      case SortType.Surname: {
        copyStudents.sort((
          a: Student,
          b: Student,
        ) => a.surname.localeCompare(b.surname));

        break;
      }

      case SortType.Age: {
        copyStudents.sort((
          a: Student,
          b: Student,
        ) => a.age - b.age);

        break;
      }

      case SortType.Married: {
        copyStudents.sort((a: Student, b: Student) => {
          if ((a.married) === true && (b.married) === false) {
            return 1;
          }

          if ((a.married) === false && (b.married) === true) {
            return -1;
          }

          return 0;
        });

        break;
      }

      case SortType.AverageGrade: {
        copyStudents.sort((a, b) => {
          if (
            (a.grades.reduce((accum, curr) => accum + curr, 0)
            / a.grades.length)
          > (b.grades.reduce((accum, curr) => accum + curr, 0))
          / b.grades.length) {
            return 1;
          }

          if (
            (b.grades.reduce((accum, curr) => accum + curr, 0)
            / b.grades.length)
          > (a.grades.reduce((accum, curr) => accum + curr, 0))
          / a.grades.length) {
            return -1;
          }

          return 0;
        });

        break;
      }

      default: {
        throw new Error('No sort type inserted');
      }
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name: {
        copyStudents.sort((
          a: Student,
          b: Student,
        ) => b.name.localeCompare(a.name));

        break;
      }

      case SortType.Surname: {
        copyStudents.sort((
          a: Student,
          b: Student,
        ) => b.surname.localeCompare(a.surname));

        break;
      }

      case SortType.Age: {
        copyStudents.sort((
          a: Student,
          b: Student,
        ) => b.age - a.age);

        break;
      }

      case SortType.Married: {
        copyStudents.sort((a: Student, b: Student) => {
          if ((a.married) === true && (b.married) === false) {
            return -1;
          }

          if ((a.married) === false && (b.married) === true) {
            return 1;
          }

          return 0;
        });

        break;
      }

      case SortType.AverageGrade: {
        copyStudents.sort((a, b) => {
          if (
            (a.grades.reduce((accum, curr) => accum + curr, 0)
            / a.grades.length)
          > (b.grades.reduce((accum, curr) => accum + curr, 0))
          / b.grades.length) {
            return -1;
          }

          if (
            (b.grades.reduce((accum, curr) => accum + curr, 0)
            / b.grades.length)
          > (a.grades.reduce((accum, curr) => accum + curr, 0))
          / a.grades.length) {
            return 1;
          }

          return 0;
        });

        break;
      }

      default: {
        throw new Error('No sort type inserted');
      }
    }
  }

  return copyStudents;
}
