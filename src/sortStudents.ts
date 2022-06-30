
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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' |'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];
  const sortOrder: number = order === 'asc' ? 1 : -1;
  const callbackSum = (
    sum: number,
    nextValue: number,
  ): number => sum + nextValue;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      if (order === 'desc') {
        copy.sort((a: Student, b: Student) => b[sortBy]
          .localeCompare(a[sortBy]));
      }

      copy.sort((a: Student, b: Student) => a[sortBy]
        .localeCompare(b[sortBy]));

      break;

    case SortType.Married:
    case SortType.Age:

      copy.sort((a: Student, b: Student) => (
        (Number(a[sortBy]) - Number(b[sortBy])) * sortOrder
      ));

      break;

    case SortType.AverageGrade:

      copy.sort((a: Student, b: Student) => (
        (a[sortBy].reduce(callbackSum, 0) / a[sortBy].length
          - b[sortBy].reduce(callbackSum, 0) / b[sortBy].length) * sortOrder
      ));

      break;
    default:
      return [];
  }

  return copy;
}
