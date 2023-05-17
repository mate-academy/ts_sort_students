/* eslint-disable max-len */
/* eslint-disable semi */

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
  AverageGrade = 'grades'
}

function countAverageGrades(grades: number[]): number {
  const sum = grades.reduce((total, grade) => total + grade, 0);

  return sum / grades.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const result = [...students];

  result.sort((prev, next) => {
    switch (sortBy) {
      case 'age':
      case 'married':
        return (order === 'asc')
          ? Number(prev[sortBy]) - Number(next[sortBy])
          : Number(next[sortBy]) - Number(prev[sortBy]);
      case 'name':
      case 'surname':
        return (order === 'asc')
          ? prev[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(prev[sortBy]);
      case 'grades':
        return (order === 'asc')
          ? countAverageGrades(prev[sortBy]) - countAverageGrades(next[sortBy])
          : countAverageGrades(next[sortBy]) - countAverageGrades(prev[sortBy]);
      default:
        throw new Error('Sort type doesn\'t exist');
    }
  });

  return result;
}
