
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

function avGrade(grades: number[]):number {
  return grades.reduce((a, b) => a + b) / grades.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  return [...students].sort(
    (a, b) => {
      let studentA:Student = a;
      let studentB:Student = b;

      if (order === 'desc') {
        [studentA, studentB] = [studentB, studentA];
      }

      if (sortBy === SortType.Name) {
        return studentA.name.localeCompare(studentB.name);
      }

      if (sortBy === SortType.Surname) {
        return studentA.surname.localeCompare(studentB.surname);
      }

      if (sortBy === SortType.Age) {
        return studentA.age - studentB.age;
      }

      if (sortBy === SortType.Married) {
        return Number(studentA.married) - Number(studentB.married);
      }

      if (sortBy === SortType.AverageGrade) {
        return avGrade(studentA.grades) - avGrade(studentB.grades);
      }

      return 0;
    },
  );
}
