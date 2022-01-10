
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
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
  return [...students].sort((studentOne, studentTwo) => {
    let firstAverage: number;
    let secondAverage: number;

    switch (order) {
      case 'asc':
        switch (sortBy) {
          case SortType.Name:
            return studentOne.name.localeCompare(studentTwo.name);

          case SortType.Surname:
            return studentOne.surname.localeCompare(studentTwo.surname);

          case SortType.Age:
            return studentOne.age - studentTwo.age;

          case SortType.Married:
            return +studentOne.married - +studentTwo.married;

          case SortType.AverageGrade:
            firstAverage = studentOne.grades.reduce((a, b) => {
              return a + b;
            }) / studentOne.grades.length;

            secondAverage = studentTwo.grades.reduce((a, b) => {
              return a + b;
            }) / studentTwo.grades.length;

            return firstAverage - secondAverage;

          default:
            return 0;
        }

      case 'desc':
        switch (sortBy) {
          case SortType.Name:
            return studentTwo.name.localeCompare(studentOne.name);

          case SortType.Surname:
            return studentTwo.surname.localeCompare(studentOne.surname);

          case SortType.Age:
            return studentTwo.age - studentOne.age;

          case SortType.Married:
            return +studentTwo.married - +studentOne.married;

          case SortType.AverageGrade:
            firstAverage = studentOne.grades.reduce((a, b) => {
              return a + b;
            }) / studentOne.grades.length;

            secondAverage = studentTwo.grades.reduce((a, b) => {
              return a + b;
            }) / studentTwo.grades.length;

            return secondAverage - firstAverage;

          default:
            return 0;
        }

      default:
        return 0;
    }
  });
}
