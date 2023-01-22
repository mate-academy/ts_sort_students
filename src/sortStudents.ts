
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  function calc(arr: number[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  }

  return [...students].sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return order === 'desc'
          ? Number(b[sortBy]) - Number(a[sortBy])
          : Number(a[sortBy]) - Number(b[sortBy]);

      case SortType.Name:
      case SortType.Surname:
        return order === 'desc'
          ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);

      case SortType.AverageGrade:
        return order === 'desc'
          ? calc(b[sortBy]) - calc(a[sortBy])
          : calc(a[sortBy]) - calc(b[sortBy]);

      default:
        throw new Error('There is no such category to sort!');
    }
  });
}
