/* eslint-disable no-fallthrough */

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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export const sortStudents = (
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] => {
  const studentsCopy = [...students];

  const sortDirection = order === 'asc' ? 1 : -1;

  studentsCopy.sort((studentA, studentB) => {
    let comparisonResult = 0;

    switch (sortBy) {
      case SortType.Name:

      case SortType.Surname: {
        comparisonResult = studentA[sortBy].localeCompare(studentB[sortBy]);
        break;
      }

      case SortType.Age:

      case SortType.Married: {
        comparisonResult = Number(studentA[sortBy]) - Number(studentB[sortBy]);
        break;
      }

      case SortType.AverageGrade: {
        const averageGradeA = studentA.grades.reduce(
          (accumulator, grade) => accumulator + grade, 0,
        ) / studentA.grades.length;

        const averageGradeB = studentB.grades.reduce(
          (accumulator, grade) => accumulator + grade, 0,
        ) / studentB.grades.length;

        comparisonResult = averageGradeA - averageGradeB;
        break;
      }

      default: {
        throw new Error('Not supported sort type');
      }
    }

    return sortDirection * comparisonResult;
  });

  return studentsCopy;
};
