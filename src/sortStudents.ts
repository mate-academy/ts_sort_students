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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(arr: number[]): number {
  const sum = arr.reduce((acc: number, value: number) => acc + value);

  return sum / arr.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = students.slice();
  let callback;

  if (order === 'asc') {
    switch (sortBy) {
      case 'name':
      case 'surname':
        callback = (
          st1: Student, st2: Student,
        ): number => st1[sortBy].localeCompare(st2[sortBy]);
        break;

      case 'age':
        callback = (
          st1: Student, st2: Student,
        ): number => st1[sortBy] - st2[sortBy];
        break;

      case 'married':
        callback = (st1: Student): number => (st1[sortBy] ? 1 : -1);
        break;

      case 'grades':
        callback = (
          st1: Student, st2: Student,
        ): number => getAverage(st1[sortBy]) - getAverage(st2[sortBy]);
        break;

      default:
        break;
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case 'name':
      case 'surname':
        callback = (
          st1: Student, st2: Student,
        ): number => st2[sortBy].localeCompare(st1[sortBy]);
        break;

      case 'age':
        callback = (
          st1: Student, st2: Student,
        ): number => st2[sortBy] - st1[sortBy];
        break;

      case 'married':
        callback = (st1: Student): number => (st1[sortBy] ? -1 : 1);
        break;

      case 'grades':
        callback = (
          st1: Student, st2: Student,
        ): number => getAverage(st2[sortBy]) - getAverage(st1[sortBy]);
        break;

      default:
        break;
    }
  }

  return studentsCopy.sort(callback);
}
