
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    if (typeof a[sortBy] === 'string') {
      if (order === 'desc') {
        return b[sortBy].toString().localeCompare(a[sortBy].toString());
      }

      return a[sortBy].toString().localeCompare(b[sortBy].toString());
    }

    if (sortBy === 'grades') {
      const quantityA: number = a.grades.length;
      const quantityB: number = b.grades.length;

      const averageA: number = a.grades
        .reduce((acum, el) => (acum + el), 0) / quantityA;

      const averageB: number = b.grades
        .reduce((acum, el) => (acum + el), 0) / quantityB;

      if (order === 'desc') {
        return averageB - averageA;
      }

      return averageA - averageB;
    }

    return order === 'desc'
      ? Number(b[sortBy]) - Number(a[sortBy])
      : Number(a[sortBy]) - Number(b[sortBy]);
  });
}
