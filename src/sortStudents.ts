type Values = string | number | boolean | number[];

function compareValue(val1: Values, val2: Values): number {
  if (val1 > val2) {
    return 1;
  }

  if (val1 < val2) {
    return -1;
  }

  return 0;
}

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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = students.map((item) => ({ ...item }));

  copy.sort((a: Student, b: Student): number => {
    let valueA = a[sortBy];
    let valueB = b[sortBy];

    if (order === 'desc') {
      valueA = b[sortBy];
      valueB = a[sortBy];
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
      case SortType.Age:
      case SortType.Married:
        return compareValue(valueA, valueB);
      case SortType.AverageGrade:
        if (typeof valueA === 'object' && typeof valueB === 'object') {
          return valueA.reduce((acc, item) => acc + item, 0) / valueA.length
            - valueB.reduce((acc, item) => acc + item, 0) / valueB.length;
        }

        return 0;
      default:
        return 0;
    }
  });

  return copy;
}
