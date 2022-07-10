
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
  const copyStudent: Student[] = [...students];
  const sortOrder: number = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'desc') {
        copyStudent.sort((a: Student, b: Student) => b[sortBy]
          .localeCompare(a[sortBy]));
      }

      copyStudent.sort((a: Student, b: Student) => a[sortBy]
        .localeCompare(b[sortBy]));

      break;

    case SortType.Married:
    case SortType.Age:
      copyStudent.sort((a: Student, b: Student) => (
        (Number(a[sortBy]) - Number(b[sortBy])) * sortOrder
      ));

      break;

    case SortType.AverageGrade:
      copyStudent.sort((a: Student, b: Student) => (
        (a[sortBy].reduce(
          (sum: number, nextValue: number) => sum + nextValue, 0,
        ) / a[sortBy].length
          - b[sortBy].reduce(
            (sum: number, nextValue: number) => sum + nextValue, 0,
          ) / b[sortBy].length) * sortOrder
      ));

      break;
    default:
      return copyStudent;
  }

  return copyStudent;
}
