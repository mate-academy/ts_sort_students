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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';
type Element = string | number | boolean | number[];

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arr: Student[] = [...students];

  return arr.sort((a: Student, b: Student): number => {
    let left: Element = a[sortBy];
    let right: Element = b[sortBy];
    const o: Element = left;

    if (order === 'desc') {
      left = right;
      right = o;
    }

    switch (typeof left) {
      case 'string':
        return left.localeCompare(right);

      case 'number':
        return left - right;

      case 'boolean':
        return left - right;

      case 'object':
        return left.reduce((al: number, l: number): number => al + l)
        / left.length
        - right.reduce((ar: number, r: number): number => ar + r)
        / right.length;

      default:
        return 0;
    }
  });
}
