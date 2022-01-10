
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

  switch (sortBy) {
    case SortType.Name: {
      copyStudents.map((student) => {
        return {
          name: student.name,
          surname: student.surname,
          age: student.age,
        };
      });

      copyStudents.sort((
        a: Student,
        b: Student,
      ) => a.name.localeCompare(b.name));

      break;
    }

    case SortType.Surname: {
      copyStudents.map((student) => {
        return {
          name: student.name,
          surname: student.surname,
          age: student.age,
        };
      });

      copyStudents.sort((
        a: Student,
        b: Student,
      ) => a.surname.localeCompare(b.surname));

      break;
    }

    case SortType.Age: {
      copyStudents.map((student) => {
        return {
          name: student.name,
          surname: student.surname,
          age: student.age,
        };
      });

      if (order === 'desc') {
        copyStudents.sort((
          a: Student,
          b: Student,
        ) => b.age - a.age);
      }

      break;
    }

    case SortType.Married: {
      copyStudents.map((student) => {
        return {
          name: student.name,
          surname: student.surname,
          married: student.married,
        };
      });

      if (order === 'desc') {
        copyStudents.sort((a: Student, b: Student) => {
          if ((a.married) === true && (b.married) === false) {
            return -1;
          }

          if ((a.married) === false && (b.married) === true) {
            return 1;
          }

          return 0;
        });
      }

      break;
    }

    case SortType.AverageGrade: {
      copyStudents.map((student) => {
        return {
          name: student.name,
          surname: student.surname,
          age: student.age,
        };
      });

      if (order === 'desc') {
        copyStudents.sort((a, b) => {
          if (
            (a.grades.reduce((prev, curr) => prev + curr, 0) / a.grades.length)
          > (b.grades.reduce((prev, curr) => prev + curr, 0))
          / b.grades.length) {
            return -1;
          }

          if (
            (b.grades.reduce((prev, curr) => prev + curr, 0) / b.grades.length)
          > (a.grades.reduce((prev, curr) => prev + curr, 0))
          / a.grades.length) {
            return 1;
          }

          return 0;
        });
      } else if (order === 'asc') {
        copyStudents.sort((a, b) => {
          if (
            (a.grades.reduce((prev, curr) => prev + curr, 0) / a.grades.length)
          > (b.grades.reduce((prev, curr) => prev + curr, 0))
          / b.grades.length) {
            return 1;
          }

          if (
            (b.grades.reduce((prev, curr) => prev + curr, 0) / b.grades.length)
          > (a.grades.reduce((prev, curr) => prev + curr, 0))
          / a.grades.length) {
            return -1;
          }

          return 0;
        });
      }

      break;
    }

    default: {
      copyStudents.map((student) => {
        return `${student.name} + ${student.surname} + ${student.age}`;
      });
      break;
    }
  }

  return copyStudents;
}
