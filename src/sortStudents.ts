
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
  const copyStudents = students.map((student: Student) => student);

  switch (sortBy) {
    case SortType.Name:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => {
          const fa = a.name.toLowerCase();
          const fb = b.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }

          if (fa > fb) {
            return 1;
          }

          return 0;
        })
        : copyStudents.sort((a, b) => {
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
      return (order === 'asc')
        ? copyStudents.sort((a, b) => {
          const fa = a.surname.toLowerCase();
          const fb = b.surname.toLowerCase();

          if (fa < fb) {
            return -1;
          }

          if (fa > fb) {
            return 1;
          }

          return 0;
        })
        : copyStudents.sort((a, b) => {
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
      return (order === 'asc')
        ? copyStudents.sort((a, b) => {
          return a.age - b.age;
        })
        : copyStudents.sort((a, b) => {
          return b.age - a.age;
        });

    case SortType.Married:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => {
          return Number(a.married) - Number(b.married);
        })
        : copyStudents.sort((a, b) => {
          return Number(b.married) - Number(a.married);
        });

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => {
          const aAverage = a.grades.reduce((first, second) => first + second)
            / a.grades.length;
          const bAverage = b.grades.reduce((first, second) => first + second)
            / b.grades.length;

          return aAverage - bAverage;
        })
        : copyStudents.sort((a, b) => {
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
