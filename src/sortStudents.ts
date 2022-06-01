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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const getAvg = (grades: number[]): number => grades
    .reduce((a: number, b: number) => a + b) / grades.length;

  switch (sortBy) {
    case 'name':
    case 'surname':
      return [...students].sort((current, next) => {
        return order === 'asc'
          ? current[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(current[sortBy]);
      });
    case 'married':
    case 'age':
      return [...students].sort((current, next) => {
        return order === 'asc'
          ? +current[sortBy] - +next[sortBy]
          : +next[sortBy] - +current[sortBy];
      });
    case 'grades':
      return [...students].sort((current, next) => {
        return order === 'asc'
          ? getAvg(current[sortBy]) - getAvg(next[sortBy])
          : getAvg(next[sortBy]) - getAvg(current[sortBy]);
      });
    default:
      return students;
  }
}
