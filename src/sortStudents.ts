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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

function average(grades: number[]) : number {
  return grades.reduce((num1, num2) => num1 + num2, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return (order === 'asc')
        ? studentsCopy.sort((studentA, studentB) => (
          studentA.name.localeCompare(studentB.name)
        ))
        : studentsCopy.sort((studentA, studentB) => (
          studentB.name.localeCompare(studentA.name)
        ));

    case SortType.Surname:
      return (order === 'asc')
        ? studentsCopy.sort((studentA, studentB) => (
          studentA.surname.localeCompare(studentB.surname)
        ))
        : studentsCopy.sort((studentA, studentB) => (
          studentB.surname.localeCompare(studentA.surname)
        ));

    case SortType.Age:
      return (order === 'asc')
        ? studentsCopy.sort((studentA, studentB) => (
          studentA.age - studentB.age))
        : studentsCopy.sort((studentA, studentB) => (
          studentB.age - studentA.age));

    case SortType.Married:
      return (order === 'asc')
        ? studentsCopy.sort((studentA, studentB) => (
          +studentA.married - +studentB.married))
        : studentsCopy.sort((studentA, studentB) => (
          +studentB.married - +studentA.married));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? studentsCopy.sort((studentA, studentB) => (
          average(studentA.grades) - average(studentB.grades)
        ))
        : studentsCopy.sort((studentA, studentB) => (
          average(studentB.grades) - average(studentA.grades)
        ));

    default:
      return studentsCopy;
  }
}
