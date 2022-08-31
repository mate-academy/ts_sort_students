// import { resourceLimits } from "worker_threads";

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades
    .reduce((firstGreads, secondGreads) => firstGreads + secondGreads, 0)
    / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const orderSwitch: number = (order === 'asc') ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy
        .sort((firstStudent, secondStudent) => firstStudent[sortBy]
          .localeCompare(secondStudent[sortBy]) * orderSwitch);
      break;
    case SortType.Age:
      studentsCopy
        .sort((firstStudent, secondStudent) => (firstStudent.age
          - secondStudent.age) * orderSwitch);
      break;
    case SortType.Married:
      studentsCopy
        .sort((firstStudent, secondStudent) => (Number(firstStudent.married)
        - Number(secondStudent.married)) * orderSwitch);
      break;
    default:
      studentsCopy
        .sort((first, second) => (getAverageGrade(first.grades)
        - getAverageGrade(second.grades)) * orderSwitch);
  }

  return studentsCopy;
}
