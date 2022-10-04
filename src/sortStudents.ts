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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((
    total: number,
    current: number,
  ): number => (
    total + current
  ), 0) / grades.length;
}

function compareNumbers(
  firstNumber: number,
  secondNumber: number,
  order: SortOrder,
): number {
  return (order === 'asc')
    ? firstNumber - secondNumber
    : secondNumber - firstNumber;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((
      previousStudent: Student,
      currentStudent: Student,
    ): number => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return (order === 'asc')
            ? previousStudent[sortBy].localeCompare(currentStudent[sortBy])
            : currentStudent[sortBy].localeCompare(previousStudent[sortBy]);

        case SortType.AverageGrade:
          return compareNumbers(
            getAverageGrade(previousStudent[sortBy]),
            getAverageGrade(currentStudent[sortBy]),
            order,
          );

        default:
          return compareNumbers(
            Number(previousStudent[sortBy]),
            Number(currentStudent[sortBy]),
            order,
          );
      }
    });
}
