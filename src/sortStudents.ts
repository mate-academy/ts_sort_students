export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

const averageGrade = (grades: number[]): number => {
  return grades.reduce((a, b) => a + b) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((previous: Student, next: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'desc'
          ? next[sortBy].localeCompare(previous[sortBy])
          : previous[sortBy].localeCompare(next[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'desc'
          ? +(next[sortBy]) - +(previous[sortBy])
          : +(previous[sortBy]) - +(next[sortBy]);

      case SortType.AverageGrade:
        return order === 'desc'
          ? averageGrade(next[sortBy]) - averageGrade(previous[sortBy])
          : averageGrade(previous[sortBy]) - averageGrade(next[sortBy]);

      default:
        throw new Error('SortType Error');
    }
  });
}
