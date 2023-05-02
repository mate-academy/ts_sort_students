// import { SortOrder } from './sortStudents';

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

function getAverageGrades(grades: number[]): number {
  return grades.reduce((acc, val) => acc + val) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  switch (sortBy) {
    case 'name':
    case 'surname':
      return [...students].sort((prev, cur) => {
        return order === 'asc'
          ? prev[sortBy].localeCompare(cur[sortBy])
          : cur[sortBy].localeCompare(prev[sortBy]);
      });

    case 'age':
    case 'married':
      return [...students].sort((prev, cur) => {
        return order === 'asc'
          ? +prev[sortBy] - +cur[sortBy]
          : +cur[sortBy] - +prev[sortBy];
      });

    case 'grades':
      return [...students].sort((prev, cur) => {
        return order === 'asc'
          ? getAverageGrades(prev.grades) - getAverageGrades(cur.grades)
          : getAverageGrades(cur.grades) - getAverageGrades(prev.grades);
      });

    default:
      return students;
  }
}
