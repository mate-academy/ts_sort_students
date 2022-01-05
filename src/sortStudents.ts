
export interface Student {
  // describe Student interface
}

export enum SortType {
  // describe SortType enum
}

// create SortOrder type
export type SortOrder;


// export function sortStudents(students, sortBy, order) {
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

const calcAverageGrade = (arr: number[]): number => {
  return arr.reduce((a, b) => a + b) / arr.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? calcAverageGrade(a[sortBy]) - calcAverageGrade(b[sortBy])
          : calcAverageGrade(b[sortBy]) - calcAverageGrade(a[sortBy]);

      default:
        return 0;
    }
  });
}
