
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    function averageDiff(first: Student, second: Student): number {
      const firstAverageGrade: number = first.grades.reduce(
        (sum, value) => sum + value,
      ) / first.grades.length;

      const secondAverageGrade: number = second.grades.reduce(
        (sum, value) => sum + value,
      ) / second.grades.length;

      return firstAverageGrade - secondAverageGrade;
    }

    if (order === 'asc') {
      switch (typeof a[sortBy]) {
        case 'string':
          return a[sortBy].toString().localeCompare(b[sortBy].toString());
        case 'number':
        case 'boolean':
          return +a[sortBy] - +b[sortBy];
        case 'object':
          return averageDiff(a, b);
        default:
          return 0;
      }
    }

    switch (typeof b[sortBy]) {
      case 'string':
        return b[sortBy].toString().localeCompare(a[sortBy].toString());
      case 'number':
      case 'boolean':
        return +b[sortBy] - +a[sortBy];
      case 'object':
        return averageDiff(b, a);
      default:
        return 0;
    }
  });
}
