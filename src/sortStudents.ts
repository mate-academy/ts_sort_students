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
  AverageGrade = 'average grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(studentGrades: number[]): number {
  return studentGrades
    .reduce((sum, grade) => (sum + grade)) / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  const orderSort = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case 'name':
      sortedStudents.sort((studentA, studentB) => studentA.name
        .localeCompare(studentB.name) * orderSort);
      break;

    case 'surname':
      sortedStudents
        .sort((studentA, studentB) => studentA.surname
          .localeCompare(studentB.surname) * orderSort);
      break;

    case 'age':
      sortedStudents
        .sort((studentA, studentB) => (studentA.age - studentB.age)
        * orderSort);
      break;

    case 'married':
      sortedStudents
        .sort((studentA, studentB) => (+studentA.married - +studentB.married)
        * orderSort);
      break;

    case 'average grades':
      sortedStudents
        .sort((studentA, studentB) => (getAverageGrade(studentA.grades)
          - getAverageGrade(studentB.grades)) * orderSort);
      break;

    default:
      break;
  }

  return sortedStudents;
}
