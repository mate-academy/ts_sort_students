
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
  let sorting;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sorting = (order === 'asc')
        ? (st1: Student, st2: Student): number => st1[sortBy]
          .localeCompare(st2[sortBy])
        : (st1: Student, st2: Student): number => st2[sortBy]
          .localeCompare(st1[sortBy]);
      break;

    case SortType.Age:
      sorting = (order === 'asc')
        ? (st1: Student, st2: Student): number => st1[sortBy] - st2[sortBy]
        : (st1: Student, st2: Student): number => st2[sortBy] - st1[sortBy];
      break;

    case SortType.Married:
      sorting = (order === 'asc')
        ? (st1: Student): number => (st1[sortBy] ? 1 : -1)
        : (st1: Student): number => (st1[sortBy] ? -1 : 1);
      break;

    case SortType.AverageGrade:
      sorting = (order === 'asc')
        ? (st1: Student, st2: Student): number => getAverage(st1[sortBy])
          - getAverage(st2[sortBy])
        : (st1: Student, st2: Student): number => getAverage(st2[sortBy])
          - getAverage(st1[sortBy]);
      break;

    default:
      break;
  }

  return studentsCopy.sort(sorting);
}
