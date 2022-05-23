// import { numberLiteralTypeAnnotation } from "@babel/types";

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

export type SortOrder = 'asc' | 'desc';

function average(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const array = [...students];

  // switch (sortBy) {
  //   case SortType.Name:
  //   case SortType.Surname:
  //     return array.sort((a: Student, b: Student) => (
  //       (order === 'asc')
  //         ? a[sortBy].localeCompare(b[sortBy])
  //         : b[sortBy].localeCompare(a[sortBy])
  //     ));
  //   case SortType.Age:
  //   case SortType.Married:
  //     return array.sort((a: Student, b: Student) => (
  //       (order === 'asc')
  //         ? +a[sortBy] - +b[sortBy]
  //         : +b[sortBy] - +a[sortBy]
  //     ));
  //   case SortType.AverageGrade:
  //     return array.sort((a: Student, b: Student) => (
  //       (order === 'asc')
  //         ? average(a[sortBy]) - average(b[sortBy])
  //         : average(b[sortBy]) - average(a[sortBy])
  //     ));
  //   default:
  //     return array;
  // }
  array.sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return (order === 'asc')
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      case SortType.AverageGrade:
        return (order === 'asc')
          ? average(a[sortBy]) - average(b[sortBy])
          : average(b[sortBy]) - average(a[sortBy]);
      default:
        return 0;
    }
  });

  return array;
}
