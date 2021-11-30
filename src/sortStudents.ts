// import { SrvRecord } from "dns";

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const asc = order === 'asc';
  const newArrayStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return newArrayStudents.sort(
        (a: Student, b: Student) => {
          return asc
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        },
      );

    case SortType.Surname:
      return newArrayStudents.sort(
        (a: Student, b: Student) => {
          return asc
            ? a.surname.localeCompare(b.surname)
            : b.surname.localeCompare(a.surname);
        },
      );

    case SortType.Age:
      return newArrayStudents.sort(
        (a: Student, b: Student) => {
          return asc
            ? a.age - b.age
            : b.age - a.age;
        },
      );

    case SortType.Married:
      return newArrayStudents.sort(
        (a: Student, b: Student) => {
          return asc
            ? +a.married - +b.married
            : +b.married - +a.married;
        },
      );

    case SortType.AverageGrade:
      return newArrayStudents.sort(
        (a: Student, b: Student) => {
          const getAverageGrade = (student: Student): number => {
            return (student.grades.reduce((acum, item) => acum + item, 0))
            / student.grades.length;
          };

          return asc
            ? getAverageGrade(a) - getAverageGrade(b)
            : getAverageGrade(b) - getAverageGrade(a);
        },
      );

    default:
      return newArrayStudents;
  }
}
