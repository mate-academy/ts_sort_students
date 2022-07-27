
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const average: (arr: number[]) => number
    = (arr) => arr.reduce((sum, el) => sum + el) / arr.length;

  return [...students].sort((a, b) => {
    let aa: Student = a;
    let bb: Student = b;

    if (order === 'desc') {
      [aa, bb] = [bb, aa];
    }

    if (['name', 'surname'].includes(sortBy)) {
      return (<string>aa[sortBy]).localeCompare(<string>bb[sortBy]);
    }

    if (['age', 'married'].includes(sortBy)) {
      return (+aa[sortBy]) - (+bb[sortBy]);
    }

    return average(<number[]>aa[sortBy]) - average(<number[]>bb[sortBy]);
  });
}
