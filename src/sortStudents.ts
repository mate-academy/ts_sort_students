
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
  let sortedArr:Student[] = [...students];

  sortedArr = sortedArr
    .sort((el1:Student, el2:Student) => {
      if (sortBy === 'grades') {
        return (el1[sortBy]
          .reduce((a, b) => a + b, 0) / el1[sortBy].length
        > el2[sortBy]
          .reduce((a, b) => a + b, 0) / el2[sortBy].length) ? 1 : -1;
      }

      return (el1[sortBy] > el2[sortBy]) ? 1 : -1;
    });

  if (order === 'desc') {
    return sortedArr.reverse();
  }

  if (sortBy === 'grades') {
    return students.sort((el1:Student, el2:Student) => {
      return (el1[sortBy]
        .reduce((a, b) => a + b, 0) / el1[sortBy].length
        >= el2[sortBy]
          .reduce((a, b) => a + b, 0) / el2[sortBy].length) ? 1 : -1;
    });
  }

  return sortedArr;
}
