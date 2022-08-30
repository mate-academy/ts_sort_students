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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const orderSwitch: number = (order === 'asc') ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
      studentsCopy
        .sort((prev, next) => prev.name.localeCompare(next.name)
        * orderSwitch);
      break;
    case SortType.Surname:
      studentsCopy
        .sort((prev, next) => prev.surname.localeCompare(next.surname)
        * orderSwitch);
      break;
    case SortType.Age:
      studentsCopy
        .sort((prev, next) => (prev.age - next.age)
        * orderSwitch);
      break;
    case SortType.Married:
      studentsCopy
        .sort((prev, next) => (+prev.married - +next.married)
        * orderSwitch);
      break;
    default:
      studentsCopy
        .sort((prev, next) => (
          ((prev.grades
            .reduce((numPrev, numNext) => numPrev + numNext, 0))
            / prev.grades.length)
          - ((next.grades
            .reduce((numPrev, numNext) => numPrev + numNext, 0))
            / next.grades.length))
          * orderSwitch);
  }

  return studentsCopy;
}
