
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

const getAverageGrade = (grades: number[]): number => {
  return grades.reduce((prev, next) => prev + next, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const cloneStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? cloneStudents
          .sort((prev, next) => prev[sortBy].localeCompare(next[sortBy]))
        : cloneStudents
          .sort((prev, next) => next[sortBy].localeCompare(prev[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? cloneStudents
          .sort((prev, next) => Number(prev[sortBy]) - Number(next[sortBy]))
        : cloneStudents
          .sort((prev, next) => Number(next[sortBy]) - Number(prev[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? cloneStudents
          .sort((prev, next) => (
            getAverageGrade(prev[sortBy]) - getAverageGrade(next[sortBy])))
        : cloneStudents
          .sort((prev, next) => (
            getAverageGrade(next[sortBy]) - getAverageGrade(prev[sortBy])));
    default:
      break;
  }

  return students;
}
