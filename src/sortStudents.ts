// import { getDefaultFormatCodeSettings } from "typescript";

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
  AverageGrade = 'grades'
}

function averGrade(array: number[]): number {
  return array.reduce((sum, x) => (sum + x), 0) / array.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudent = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? newStudent
          .sort((person1, person2) => person1[sortBy]
            .localeCompare(person2[sortBy]))
        : newStudent
          .sort((person1, person2) => person2[sortBy]
            .localeCompare(person1[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? newStudent
          .sort((person1, person2) => person1[sortBy]
            - person2[sortBy])
        : newStudent
          .sort((person1, person2) => person2[sortBy]
            - person1[sortBy]);

    case SortType.Married:
      return order === 'asc'
        ? newStudent
          .sort((person1, person2) => (+person1[sortBy]) - (+person2[sortBy]))
        : newStudent
          .sort((person1, person2) => (+person2[sortBy]) - (+person1[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? newStudent
          .sort((person1, person2) => averGrade(person1[sortBy])
            - averGrade(person2[sortBy]))
        : newStudent.sort((person1, person2) => averGrade(person2[sortBy])
          - averGrade(person1[sortBy]));

    default:
      throw new Error('Arguments are not valid');
  }
}
