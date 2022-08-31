// import { TSConstructSignatureDeclaration } from "@babel/types";

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  function averageGrades(grades: number[]): number {
    return grades.reduce((sum: number, x: number) => sum + x) / grades.length;
  }

  switch (sortBy) {
    case (SortType.Name):
    case (SortType.Surname):
      return order === 'asc'
        ? studentsCopy
          .sort((student1, student2) => (
            student1[sortBy].localeCompare(student2[sortBy])))
        : studentsCopy
          .sort((student1, student2) => (
            student2[sortBy].localeCompare(student1[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy
          .sort((student1, student2) => (
            Number(student1[sortBy]) - Number(student2[sortBy])))
        : studentsCopy
          .sort((student1, student2) => (
            Number(student2[sortBy]) - Number(student1[sortBy])));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((student1, student2) => (
          averageGrades(student1.grades) - averageGrades(student2.grades)))
        : studentsCopy.sort((student1, student2) => (
          averageGrades(student2.grades) - averageGrades(student1.grades)));

    default:
      throw new Error('Incorrect parameter');
  }
}
