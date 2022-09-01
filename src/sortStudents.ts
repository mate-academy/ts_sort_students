// import { valueToNode } from "@babel/types";

export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAverage = (dataArray : number[]): number => dataArray
  .reduce((sum, current) => sum + current, 0) / dataArray.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] | number {
  // write your function
  const copyStudetsArray = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudetsArray
          .sort((prevStudent, nextStudent) => prevStudent[sortBy]
            .localeCompare(nextStudent[sortBy]))
        : copyStudetsArray
          .sort((prevStudent, nextStudent) => nextStudent[sortBy]
            .localeCompare(prevStudent[sortBy]));

    case SortType.AverageGrade:
      return copyStudetsArray
        .sort((prevStudent, nextStudent) => (order === 'asc'
          ? getAverage(prevStudent.grades) - getAverage(nextStudent.grades)
          : getAverage(nextStudent.grades) - getAverage(prevStudent.grades)
        ));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyStudetsArray
          .sort((prevStudent, nextStudent) => +(prevStudent[sortBy])
          - +(nextStudent[sortBy]))
        : copyStudetsArray
          .sort((prevStudent, nextStudent) => +(nextStudent[sortBy])
          - +(prevStudent[sortBy]));

    default: throw new Error('Please,enter valid param');
  }
}
