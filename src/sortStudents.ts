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
  const cloneStudent: Student[] = [...students];

  return cloneStudent.sort((a: Student, b: Student): number => {
    let left: Element = a[sortBy];
    let right: Element = b[sortBy];
    const cloneLeft: Element = left;

    if (order === 'desc') {
      left = right;
      right = cloneLeft;
    }

    switch (sortBy) {
      case 'name':
        return left.localeCompare(right);

      case 'surname':
        return left.localeCompare(right);

      case 'age':
        return left - right;

      case 'married':
        return left - right;

      case 'grades':
        return left.reduce((
          accLeft: number,
          currLeft: number,
        ): number => accLeft + currLeft)
        / left.length
        - right.reduce((
          accRight: number,
          currRight: number,
        ): number => accRight + currRight)
        / right.length;

      default:
        return 0;
    }
  });
}
