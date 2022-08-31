
export interface Student {
  name:string;
  surname:string;
  age:number;
  married:boolean;
  grades:number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const studentsCopy:Student[] = [...students];

  function getAverageGrade(grades:number[]):number {
    return grades.reduce((sum, currentValue) => sum
    + currentValue, 0) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort(
        (first, second) => first[sortBy].localeCompare(second[sortBy]),
      );
    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort(
        (first, second) => {
          return order === 'asc'
            ? +first[sortBy] - +second[sortBy]
            : +second[sortBy] - +first[sortBy];
        },
      );
    case SortType.AverageGrade:
      return studentsCopy.sort(
        (first, second) => {
          return order === 'asc'
            ? getAverageGrade(first[sortBy]) - getAverageGrade(second[sortBy])
            : getAverageGrade(second[sortBy]) - getAverageGrade(first[sortBy]);
        },
      );
    default:
      throw Error('Incorrect sort type request');
  }
}
