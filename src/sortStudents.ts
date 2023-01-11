
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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const resultArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return resultArr.sort((x: Student, y: Student) => {
        return order === 'asc'
          ? x[sortBy].localeCompare(y[sortBy])
          : y[sortBy].localeCompare(x[sortBy]);
      });

    case SortType.Age:
      return resultArr.sort((x: Student, y: Student) => {
        return order === 'asc'
          ? x[sortBy] - y[sortBy]
          : y[sortBy] - x[sortBy];
      });

    case SortType.Married:
      return resultArr.sort((x: Student, y: Student) => {
        return order === 'asc'
          ? +x[sortBy] - +y[sortBy]
          : +y[sortBy] - +x[sortBy];
      });

    case SortType.AverageGrade:
      return resultArr.sort((x: Student, y: Student) => {
        const sumX: number = x[sortBy].reduce((a: number, b: number) => {
          return a + b;
        }) / x[sortBy].length;

        const sumY: number = y[sortBy].reduce((a, b) => {
          return a + b;
        }) / y[sortBy].length;

        return order === 'asc'
          ? sumX - sumY
          : sumY - sumX;
      });

    default:
      return resultArr;
  }
}
