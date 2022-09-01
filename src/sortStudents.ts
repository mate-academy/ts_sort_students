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
    .reduce((prev, int) => prev + int, 0) / grades.length;
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
        ? copyStudents.sort((first, next) => first[sortBy]
          .localeCompare(next[sortBy]))
        : copyStudents.sort((first, next) => next[sortBy]
          .localeCompare(first[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return sortorder === 'asc'
        ? copyStudents
          .sort((first, next) => Number(first[sortBy]) - Number(next[sortBy]))
        : copyStudents
          .sort((first, next) => Number(next[sortBy]) - Number(first[sortBy]));

      /* eslint-disable max-len */

    case SortType.AverageGrade:
      return sortorder === 'asc'
        ? copyStudents
          .sort((first, next) => getAverageGrade(first[sortBy]) - getAverageGrade(next[sortBy]))
        : copyStudents
          .sort((first, next) => getAverageGrade(next[sortBy]) - getAverageGrade(first[sortBy]));

    default:

      return 0;
  }
}
