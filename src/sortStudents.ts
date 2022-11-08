export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(student: Student) : number {
  return student.grades.reduce((prev:number, cur: number) => prev + cur, 0)
    / student.grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder) : Student[] {
  // write your function
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return studentsCopy.sort(
        (prev: Student, cur: Student) => {
          return order === 'asc'
            ? prev.name.localeCompare(cur.name)
            : cur.name.localeCompare(prev.name);
        },
      );

    case SortType.Surname:
      return studentsCopy.sort(
        (prev: Student, cur: Student) => {
          return order === 'asc'
            ? prev.surname.localeCompare(cur.surname)
            : cur.surname.localeCompare(prev.surname);
        },
      );

    case SortType.Age:
      return studentsCopy.sort(
        (prev: Student, cur: Student) => {
          return order === 'asc'
            ? prev.age - cur.age
            : cur.age - prev.age;
        },
      );

    case SortType.AverageGrade:
      return studentsCopy.sort(
        (prev: Student, cur: Student) => {
          return order === 'asc'
            ? getAverageGrade(prev) - getAverageGrade(cur)
            : getAverageGrade(cur) - getAverageGrade(prev);
        },
      );

    case SortType.Married:
      return studentsCopy.sort(
        (prev: Student, cur: Student) => {
          return order === 'asc'
            ? +prev.married - (+cur.married)
            : +cur.married - (+prev.married);
        },
      );

    default:
      throw new Error('Wrong func input');
  }
}
