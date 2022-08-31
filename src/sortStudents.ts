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
      return (order === 'asc')
        ? copyStudList
          .sort((firstStudent, secondStudent) => firstStudent[sort]
            .localeCompare(secondStudent[sort]))
        : copyStudList
          .sort((firstStudent, secondStudent) => secondStudent[sort]
            .localeCompare(firstStudent[sort]));
    case SortType.Married:
    case SortType.Age:
      return (order === 'asc')
        ? copyStudList
          .sort((firstStudent, secondStudent) => Number(firstStudent[sort])
          - Number(secondStudent[sort]))
        : copyStudList
          .sort((firstStudent, secondStudent) => Number(secondStudent[sort])
          - Number(firstStudent[sort]));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copyStudList
          .sort((firstStudent, secondStudent) => getAverage(firstStudent[sort])
          - getAverage(secondStudent[sort]))
        : copyStudList
          .sort((firstStudent, secondStudent) => getAverage(secondStudent[sort])
          - getAverage(firstStudent[sort]));

    default:
      return 0;
  }
}
