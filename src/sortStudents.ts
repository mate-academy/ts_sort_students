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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

type SortFunction = (
  students: Student[], sortBy: SortType, order: SortOrder
) => Student[];

export const sortStudents: SortFunction = (students, sortBy, order) => {
  switch (sortBy) {
    case 'name': case 'surname':

      return [...students].sort(
        (strOne, strTwo) => {
          if (strOne[sortBy] < strTwo[sortBy]) {
            return -1;
          }

          if (strOne[sortBy] > strTwo[sortBy]) {
            return 1;
          }

          return 0;
        },
      );

    case 'grades':

      return [...students].sort((arrOne: object, arrTwo: object) => {
        const sumOne = arrOne[sortBy].reduce(
          (prev: number, curr: number) => prev + curr,
        );
        const sumTwo = arrTwo[sortBy].reduce(
          (prev: number, curr: number) => prev + curr,
        );

        return order === 'asc'
          ? sumOne / arrOne[sortBy].length - sumTwo / arrTwo[sortBy].length
          : sumTwo / arrTwo[sortBy].length - sumOne / arrOne[sortBy].length;
      });

    default:

      return [...students].sort(
        (numOne, numTwo) => +numTwo[sortBy] - +numOne[sortBy],
      );
  }
};
