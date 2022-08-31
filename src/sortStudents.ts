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

const getAverage = (value : number[]) : number => value
  .reduce((prev, curr) => prev + curr, 0) / value.length;

export function sortStudents(
  students: Student[],
  sort: SortType,
  order: SortOrder,
): Student[] | number {
  const copyStudList = [...students];

  switch (sort) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return copyStudList.sort((a, b) => a[sort].localeCompare(b[sort]));
      }

      return copyStudList.sort((a, b) => b[sort].localeCompare(a[sort]));
    case SortType.Married:
    case SortType.Age:
      if (order === 'asc') {
        return copyStudList.sort((a, b) => Number(a[sort]) - Number(b[sort]));
      }

      return copyStudList.sort((a, b) => Number(b[sort]) - Number(a[sort]));

    case SortType.AverageGrade:
      if (order === 'asc') {
        return copyStudList
          .sort((a, b) => getAverage(a[sort]) - getAverage(b[sort]));
      }

      return copyStudList
        .sort((a, b) => getAverage(b[sort]) - getAverage(a[sort]));

    default:
      return 0;
  }
}
