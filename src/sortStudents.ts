/* eslint-disable no-case-declarations */
function getAvarageGrade(grades: number[]): number {
  return grades.reduce(
    (prev: number, cur: number): number => prev + cur,
    0,
  ) / grades.length;
}

export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((
    currentStudent: Student,
    nextStudent: Student,
  ): number => {
    switch (true) {
      case sortBy === SortType.AverageGrade:
        const currentStudentGrades = currentStudent[SortType.AverageGrade];
        const nextStudentGrades = nextStudent[SortType.AverageGrade];
        const curentStudentAverageGrade = getAvarageGrade(currentStudentGrades);
        const nextStudentAverageGrade = getAvarageGrade(nextStudentGrades);

        if (order === 'asc') {
          return curentStudentAverageGrade - nextStudentAverageGrade;
        }

        return nextStudentAverageGrade - curentStudentAverageGrade;

      case sortBy === SortType.Name || sortBy === SortType.Surname:
        if (order === 'asc') {
          return currentStudent[sortBy].localeCompare(
            nextStudent[sortBy],
          );
        }

        return nextStudent[sortBy].localeCompare(
          currentStudent[sortBy],
        );

      default:
        if (order === 'asc') {
          return currentStudent[sortBy] - nextStudent[sortBy];
        }

        return nextStudent[sortBy] - currentStudent[sortBy];
    }
  });
}
