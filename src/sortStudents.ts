
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

export type SortOrder = 'asc' | 'desc';

function getAverageGrades(arrayOfGrades: number[]): number {
  return arrayOfGrades.reduce((accumulator, currentValue) => (
    accumulator + currentValue
  )) / arrayOfGrades.length;
}

export function sortStudents(
  students : Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const copyOfStudentsArray = [...students];

  if (sortBy === SortType.Name) {
    copyOfStudentsArray.sort((studentA, studentB) => (
      (order === 'asc')
        ? studentA.name.localeCompare(studentB.name)
        : studentB.name.localeCompare(studentA.name)
    ));
  } else if (sortBy === SortType.Surname) {
    copyOfStudentsArray.sort((studentA, studentB) => (
      (order === 'asc')
        ? studentA.surname.localeCompare(studentB.surname)
        : studentB.surname.localeCompare(studentA.surname)
    ));
  } else if (sortBy === SortType.Age) {
    copyOfStudentsArray.sort((studentA, studentB) => (
      (order === 'asc')
        ? studentA.age - studentB.age
        : studentB.age - studentA.age
    ));
  } else if (sortBy === SortType.Married) {
    copyOfStudentsArray.sort((studentA, studentB) => (
      (order === 'asc')
        ? Number(studentA.married) - Number(studentB.married)
        : Number(studentB.married) - Number(studentA.married)
    ));
  } else if (sortBy === SortType.AverageGrade) {
    copyOfStudentsArray.sort((studentA, studentB) => (
      (order === 'asc')
        ? getAverageGrades(studentA.grades) - getAverageGrades(studentB.grades)
        : getAverageGrades(studentB.grades) - getAverageGrades(studentA.grades)
    ));
  }

  return copyOfStudentsArray;
}
