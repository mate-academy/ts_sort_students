
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

export type SortOrder = 'asc' | 'desc';

const averageGrade = (grades: number[]): number => {
  return grades.reduce((prev, next) => prev + next, 0) / grades.length;
};

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
        ? studentsCopy
          .sort((prev, curr) => prev[sortBy].localeCompare(curr[sortBy]))
        : studentsCopy
          .sort((prev, curr) => curr[sortBy].localeCompare(prev[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((prev, curr) => +prev[sortBy] - (+curr[sortBy]))
        : studentsCopy.sort((prev, curr) => +curr[sortBy] - (+prev[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((prev, curr) => (
          averageGrade(prev[sortBy]) - averageGrade(curr[sortBy])))
        : studentsCopy.sort((prev, curr) => (
          averageGrade(curr[sortBy]) - averageGrade(prev[sortBy])));

    default:
      break;
  }

  return students;
}
