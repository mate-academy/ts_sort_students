export interface Student {
  name: string;
  surname: string;
  age: number
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
  const studArr = [...students];

  function calculateAverage(grades: number[]): number {
    return grades
      .reduce((sum, val) => sum + val, 0) / grades.length;
  }

  function sortStringOrder(a: string, b: string): number {
    return order === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
  }

  function sortNumberOrder(a: number, b: number): number {
    return order === 'asc' ? a - b : b - a;
  }

  studArr.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sortStringOrder(a[sortBy], b[sortBy]);
      case SortType.Age:
        return sortNumberOrder(a[sortBy], b[sortBy]);
      case SortType.Married:
        return sortNumberOrder(Number(a[sortBy]), Number(b[sortBy]));
      case SortType.AverageGrade:
        return sortNumberOrder(
          calculateAverage(a[sortBy]), calculateAverage(b[sortBy]),
        );
      default:
        return 0;
    }
  });

  return studArr;
}
