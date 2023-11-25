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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const copyArray: Student[] = [...students];

  function calculateAverage(grades: number[]):number {
    return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
  }

  function sortByOrder(
    a:Student,
    b:Student,
    order2: SortOrder,
    callback: ((a:Student, b:Student) => number),
  ) :number {
    const result:number = callback(a, b);

    return order2 === 'asc' ? result : result * -1;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyArray
        .sort((a, b) => sortByOrder(a, b, order, (x, y) => (
          x[sortBy].localeCompare(y[sortBy])
        )));
    case SortType.Age:
    case SortType.Married:
      return copyArray
        .sort((a, b) => sortByOrder(a, b, order, (x, y) => (
          +x[sortBy] - +y[sortBy]
        )));
    case SortType.AverageGrade:
      return copyArray
        .sort((a, b) => sortByOrder(a, b, order, (x, y) => (
          calculateAverage(x[sortBy]) - calculateAverage(y[sortBy])
        )));
    default:
      return copyArray;
  }
}
