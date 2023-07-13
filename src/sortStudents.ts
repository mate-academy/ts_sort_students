
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
  function getAverageGrade(grades: number[]): number {
    return grades.reduce((acc, item, index, array) => {
      return index !== array.length - 1
        ? acc + item
        : (acc + item) / array.length;
    });
  }

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? [...students].sort((a: Student, b: Student) => {
          return a.name.localeCompare(b.name);
        })
        : [...students].sort((a: Student, b: Student) => {
          return b.name.localeCompare(a.name);
        });

    case SortType.Surname:
      return order === 'asc'
        ? [...students].sort((a: Student, b: Student) => {
          return a.surname.localeCompare(b.surname);
        })
        : [...students].sort((a: Student, b: Student) => {
          return b.surname.localeCompare(a.surname);
        });

    case SortType.Age:
      return order === 'asc'
        ? [...students].sort((a: Student, b: Student) => {
          return a.age - b.age;
        })
        : [...students].sort((a: Student, b: Student) => {
          return b.age - a.age;
        });

    case SortType.Married:
      return order === 'asc'
        ? [...students].sort((a: Student, b: Student) => {
          return +a.married - +b.married;
        })
        : [...students].sort((a: Student, b: Student) => {
          return +b.married - +a.married;
        });

    case SortType.AverageGrade:
      return order === 'asc'
        ? [...students].sort((a: Student, b: Student) => {
          return getAverageGrade(a.grades) - getAverageGrade(b.grades);
        })
        : [...students].sort((a: Student, b: Student) => {
          return getAverageGrade(b.grades) - getAverageGrade(a.grades);
        });
    default:
      return students;
  }
}
