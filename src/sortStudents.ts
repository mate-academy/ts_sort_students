
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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const inputListCopy: Student[] = [...students];
  const orderForList: number = order === 'asc' ? 1 : -1;
  const sumFn = (sum: number, nextValue: number): number => sum + nextValue;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      if (order === 'desc') {
        inputListCopy.sort((a: Student, b: Student) => b[sortBy]
          .localeCompare(a[sortBy]));
      }

      inputListCopy.sort((a: Student, b: Student) => a[sortBy]
        .localeCompare(b[sortBy]));

      break;

    case SortType.Married:
    case SortType.Age:

      inputListCopy
        .sort((a: Student, b: Student) => (
          (Number(a[sortBy]) - Number(b[sortBy]))
          * orderForList
        ));

      break;

    case SortType.AverageGrade:

      inputListCopy
        .sort((a: Student, b: Student) => (
          (a[sortBy].reduce(sumFn, 0) / a[sortBy].length
            - b[sortBy].reduce(sumFn, 0) / b[sortBy].length)
          * orderForList
        ));

      break;

    default:
      return [];
  }

  return inputListCopy;
}
