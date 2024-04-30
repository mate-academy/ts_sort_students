/* eslint-disable @typescript-eslint/explicit-function-return-type */
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

function calculateGradeAverage(grades: number[]): number {
  return (grades.reduce((acc, curr) => acc + curr, 0)) / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const sortOrder = order === 'asc' ? 1 : -1;

  const sortFunctions = {
    [SortType.Name]:
     (a: Student, b: Student) => a.name.localeCompare(b.name) * sortOrder,
    [SortType.Surname]:
    (a: Student, b: Student) => a.surname.localeCompare(b.surname) * sortOrder,
    [SortType.Age]:
     (a: Student, b: Student) => (a.age - b.age) * sortOrder,
    [SortType.Married]:
      (a: Student, b: Student) => ((a.married ? 1 : 0) - (b.married ? 1 : 0))
      * sortOrder,
    [SortType.AverageGrade]: (a: Student, b: Student) => {
      const avgA = calculateGradeAverage(a.grades);
      const avgB = calculateGradeAverage(b.grades);

      return (avgA - avgB) * sortOrder;
    },
  };

  const sortedStudents = [...students];

  sortedStudents.sort((a: Student, b: Student) => {
    const sortFunction = sortFunctions[sortBy];

    if (!sortFunction) {
      throw new Error('Invalid sort type!');
    }

    return sortFunction(a, b);
  });

  return sortedStudents;
}
