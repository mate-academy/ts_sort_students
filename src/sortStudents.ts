
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
  if (order === 'asc') {
    return [...students].sort((a, b) => {
      switch (sortBy) {
        case SortType.Name: {
          return a.name.localeCompare(b.name);
        }

        case SortType.Surname: {
          return a.surname.localeCompare(b.surname);
        }

        case SortType.Age: {
          return a.age - b.age;
        }

        case SortType.Married: {
          return +a.married - +b.married;
        }

        case SortType.AverageGrade: {
          const avgA: number = a.grades.reduce((accum, curr) => accum + curr, 0)
              / a.grades.length;
          const avgB: number = b.grades.reduce((accum, curr) => accum + curr, 0)
            / b.grades.length;

          return avgA - avgB;
        }

        default: {
          return 0;
        }
      }
    });
  }

  if (order === 'desc') {
    return [...students].sort((a, b) => {
      switch (sortBy) {
        case SortType.Name: {
          return b.name.localeCompare(a.name);
        }

        case SortType.Surname: {
          return b.surname.localeCompare(a.surname);
        }

        case SortType.Age: {
          return b.age - a.age;
        }

        case SortType.Married: {
          return +b.married - +a.married;
        }

        case SortType.AverageGrade: {
          const avgA: number = a.grades.reduce((accum, curr) => accum + curr, 0)
              / a.grades.length;
          const avgB: number = b.grades.reduce((accum, curr) => accum + curr, 0)
            / b.grades.length;

          return avgB - avgA;
        }

        default: {
          return 0;
        }
      }
    });
  }

  return students;
}
