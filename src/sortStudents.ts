
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const copyStudents = students.map((a: Student) => a);

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return copyStudents.sort((a, b) => {
          const fa = a.name.toLowerCase();
          const fb = b.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }

          if (fa > fb) {
            return 1;
          }

          return 0;
        });
      }

      return copyStudents.sort((a, b) => {
        const fa = a.name.toLowerCase();
        const fb = b.name.toLowerCase();

        if (fa > fb) {
          return -1;
        }

        if (fa < fb) {
          return 1;
        }

        return 0;
      });

    case SortType.Surname:
      if (order === 'asc') {
        return copyStudents.sort((a, b) => {
          const fa = a.surname.toLowerCase();
          const fb = b.surname.toLowerCase();

          if (fa < fb) {
            return -1;
          }

          if (fa > fb) {
            return 1;
          }

          return 0;
        });
      }

      return copyStudents.sort((a, b) => {
        const fa = a.surname.toLowerCase();
        const fb = b.surname.toLowerCase();

        if (fa > fb) {
          return -1;
        }

        if (fa < fb) {
          return 1;
        }

        return 0;
      });

    case SortType.Age:
      if (order === 'asc') {
        return copyStudents.sort((a, b) => {
          return a.age - b.age;
        });
      }

      return copyStudents.sort((a, b) => {
        return b.age - a.age;
      });

    case SortType.Married:
      if (order === 'asc') {
        return copyStudents.sort((a, b) => {
          return Number(a.married) - Number(b.married);
        });
      }

      return copyStudents.sort((a, b) => {
        return Number(b.married) - Number(a.married);
      });

    case SortType.AverageGrade:
      if (order === 'asc') {
        return copyStudents.sort((a, b) => {
          const aAverage = a.grades.reduce((first, second) => first + second)
            / a.grades.length;
          const bAverage = b.grades.reduce((first, second) => first + second)
            / b.grades.length;

          return aAverage - bAverage;
        });
      }

      return copyStudents.sort((a, b) => {
        const aAverage = a.grades.reduce((first, second) => first + second)
          / a.grades.length;
        const bAverage = b.grades.reduce((first, second) => first + second)
          / b.grades.length;

        return bAverage - aAverage;
      });

    default:
      return students;
  }
}
