/* eslint-disable max-len */

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

const getAverageGrade = (grades: number[]): number => {
  return grades
    .reduce((sum, grade) => sum + grade, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  sortorder: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortorder === 'asc'
        ? copyStudents.sort((first, second) => first[sortBy]
          .localeCompare(second[sortBy]))
        : copyStudents.sort((first, second) => second[sortBy]
          .localeCompare(first[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return sortorder === 'asc'
        ? copyStudents
          .sort((first, second) => Number(first[sortBy]) - Number(second[sortBy]))
        : copyStudents
          .sort((first, second) => Number(second[sortBy]) - Number(first[sortBy]));

    case SortType.AverageGrade:
      return sortorder === 'asc'
        ? copyStudents
          .sort((first, second) => getAverageGrade(first[sortBy]) - getAverageGrade(second[sortBy]))
        : copyStudents
          .sort((first, second) => getAverageGrade(second[sortBy]) - getAverageGrade(first[sortBy]));

    default:

      return 0;
  }
}
