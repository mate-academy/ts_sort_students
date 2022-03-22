
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
  return [...students].sort((a: Student, b: Student) => {
    let studentA = a;
    let studentB = b;

    if (order === 'desc') {
      studentA = b;
      studentB = a;
    }

    let averageA;
    let averageB;

    switch (sortBy) {
      case SortType.Name:
        return studentA.name.localeCompare(studentB.name);

      case SortType.Surname:
        return studentA.surname.localeCompare(studentB.surname);

      case SortType.Age:
        return +studentA.age - +studentB.age;

      case SortType.Married:
        return +studentA.married - +studentB.married;

      case SortType.AverageGrade:
        averageA = studentA.grades.reduce((accum, val) => accum + val)
          / studentA.grades.length;

        averageB = studentB.grades.reduce((accum, val) => accum + val)
          / studentB.grades.length;

        return averageA - averageB;

      default:
        return 0;
    }
  });
}
