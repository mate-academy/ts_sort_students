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

function calcAverage(grades: number[]): number {
  return grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((prev: Student, next: Student) => {
        return order === 'asc'
          ? prev[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(prev[sortBy]);
      });
      break;

    case SortType.Surname:
      studentsCopy.sort((prev: Student, next: Student) => {
        return order === 'asc'
          ? prev[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(prev[sortBy]);
      });
      break;

    case SortType.Age:
      studentsCopy.sort((prev: Student, next: Student) => {
        return order === 'asc'
          ? prev[sortBy] - next[sortBy]
          : next[sortBy] - prev[sortBy];
      });
      break;

    case SortType.Married:
      studentsCopy.sort((prev: Student, next: Student) => {
        return order === 'asc'
          ? Number(prev[sortBy]) - Number(next[sortBy])
          : Number(next[sortBy]) - Number(prev[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((prev: Student, next: Student) => {
        return order === 'asc'
          ? calcAverage(prev[sortBy]) - calcAverage(next[sortBy])
          : calcAverage(next[sortBy]) - calcAverage(prev[sortBy]);
      });
      break;

    default:
      return studentsCopy;
  }

  return studentsCopy;
}
