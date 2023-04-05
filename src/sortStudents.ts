/* eslint-disable @typescript-eslint/explicit-function-return-type */

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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverage(student:Student):number {
  const studentGradesSum = student.grades.reduce((acc, curr) => acc + curr, 0);

  return studentGradesSum / student.grades.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const sortedStudents = [...students];
  let sortingFunction: (studentA:Student, studentB:Student) => number;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortingFunction = (studentA, studentB) => {
        if (order === 'desc') {
          return studentB[sortBy].localeCompare(studentA[sortBy]);
        }

        return studentA[sortBy].localeCompare(studentB[sortBy]);
      };
      break;
    case SortType.Age:
    case SortType.Married:
      sortingFunction = (studentA, studentB) => {
        if (order === 'desc') {
          return +studentB[sortBy] - +studentA[sortBy];
        }

        return +studentA[sortBy] - +studentB[sortBy];
      };
      break;

    default:
      sortingFunction = (studentA, studentB) => {
        const studentAAverage = calculateAverage(studentA);
        const studentBAverage = calculateAverage(studentB);

        if (order === 'desc') {
          return studentBAverage - studentAAverage;
        }

        return studentAAverage - studentBAverage;
      };
  }

  return sortedStudents.sort(sortingFunction);
}
