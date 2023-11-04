
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

export function sortStudents(students:Student[],
  sortBy:SortType, order:SortOrder):Student[] {
  return [...students]
    .sort((el1:Student, el2:Student) => {
      if (sortBy !== 'grades') {
        if (order === 'asc') {
          return (el1[sortBy] >= el2[sortBy]) ? 1 : -1;
        }

        return (el1[sortBy] <= el2[sortBy]) ? 1 : -1;
      }

      if (sortBy === 'grades' && order === 'asc') {
        return (el1[sortBy]
          .reduce((a, b) => a + b, 0) / el1[sortBy].length
        >= el2[sortBy] // pay attention to comparison operator
          .reduce((a, b) => a + b, 0) / el2[sortBy].length) ? 1 : -1;
      }

      return (el1[sortBy] // this code can be reached only
        // if sortBy is grades and order is 'desc'
        .reduce((a, b) => a + b, 0) / el1[sortBy].length
      <= el2[sortBy] // pay attention to comparison operator
        .reduce((a, b) => a + b, 0) / el2[sortBy].length) ? 1 : -1;
    });
}
