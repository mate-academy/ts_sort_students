
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

function getAverageGrade(student: Student): number {
  return student.grades.reduce((a: number, b: number) => {
    return a + b;
  }) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((studentOne, studentTwo) => {
    let firstAverage: number;
    let secondAverage: number;

    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? studentOne.name.localeCompare(studentTwo.name)
          : studentTwo.name.localeCompare(studentOne.name);

      case SortType.Surname:
        return order === 'asc'
          ? studentOne.surname.localeCompare(studentTwo.surname)
          : studentTwo.surname.localeCompare(studentOne.surname);

      case SortType.Age:
        return order === 'asc'
          ? studentOne.age - studentTwo.age
          : studentTwo.age - studentOne.age;

      case SortType.Married:
        return order === 'asc'
          ? +studentOne.married - +studentTwo.married
          : +studentTwo.married - +studentOne.married;

      case SortType.AverageGrade:
        firstAverage = getAverageGrade(studentOne);
        secondAverage = getAverageGrade(studentTwo);

        return order === 'asc'
          ? firstAverage - secondAverage
          : secondAverage - firstAverage;

      default:
        return 0;
    }
  });
}
