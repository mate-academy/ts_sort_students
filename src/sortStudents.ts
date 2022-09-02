/* eslint-disable max-len */

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(array: number[]): number {
  return array.reduce((prev, current) => prev + current) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((student1, student2) => student1[sortBy].localeCompare(student2[sortBy]))
        : studentsCopy.sort((student1, student2) => student2[sortBy].localeCompare(student1[sortBy]));

    case SortType.Married:
    case SortType.Age:
      return order === 'asc'
        ? studentsCopy.sort((student1, student2) => +student1[sortBy] - +(student2[sortBy]))
        : studentsCopy.sort((student1, student2) => +student2[sortBy] - +(student1[sortBy]));

    case SortType.AverageGrade:
      return studentsCopy.sort((student1, student2) => (order === 'asc'
        ? getAverageGrade(student1[sortBy]) - getAverageGrade(student2[sortBy])
        : getAverageGrade(student2[sortBy]) - getAverageGrade(student1[sortBy])
      ));

    default:
      return [];
  }
}
