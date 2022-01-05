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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  function average(grades: number[]) : number {
    return grades.reduce((num1, num2) => num1 + num2, 0) / grades.length;
  }

  switch (sortBy) {
    case (SortType.Name):
      studentsCopy.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA.name.localeCompare(studentB.name)
          : studentB.name.localeCompare(studentA.name);
      });

      break;

    case (SortType.Surname):
      studentsCopy.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA.surname.localeCompare(studentB.surname)
          : studentB.surname.localeCompare(studentA.surname);
      });

      break;

    case (SortType.Age):
      studentsCopy.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;
      });

      break;

    case (SortType.Married):
      studentsCopy.sort((studentA, studentB) => {
        return order === 'asc'
          ? +studentA.married - +studentB.married
          : +studentB.married - +studentA.married;
      });

      break;

    case (SortType.AverageGrade):
      studentsCopy.sort((studentA, studentB) => {
        return order === 'asc'
          ? average(studentA.grades) - average(studentB.grades)
          : average(studentB.grades) - average(studentA.grades);
      });

      break;

    default:
      return studentsCopy;
  }

  return studentsCopy;
}
