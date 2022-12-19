
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

function getAverageGreade(grades: number[]): number {
  return grades.reduce((accum, grade) => accum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sorted = [...students];

  switch (sortBy) {
    case (SortType.Name):
    case (SortType.Surname):
      return sorted.sort((previous, next) => (
        order === 'asc'
          ? previous[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(previous[sortBy])
      ));

    case (SortType.Age):
      return sorted.sort((previous, next) => (
        order === 'asc'
          ? previous[sortBy] - next[sortBy]
          : next[sortBy] - previous[sortBy]
      ));

    case (SortType.Married):
      return sorted.sort((previous, next) => (
        order === 'asc'
          ? Number(previous[sortBy]) - Number(next[sortBy])
          : Number(next[sortBy]) - Number(previous[sortBy])
      ));

    case (SortType.AverageGrade):
      return sorted.sort((previous, next) => (
        order === 'asc'
          ? getAverageGreade(previous[sortBy])
            - getAverageGreade(next[sortBy])
          : getAverageGreade(next[sortBy])
            - getAverageGreade(previous[sortBy])
      ));

    default:
      return sorted;
  }
}
