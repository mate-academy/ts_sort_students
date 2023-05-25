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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  type SortFunctionType = (a: Student, b: Student) => number;

  const localStudents = [...students];

  const sortFunction: SortFunctionType = (a, b) => {
    switch (sortBy) {
      default:
      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Married:
        return order === 'asc'
          ? +a.married - +b.married
          : +b.married - +a.married;
      case SortType.AverageGrade:
        return order === 'asc'
          ? (a.grades.reduce((p, c) => p + c, 0) / a.grades.length)
            - (b.grades.reduce((p, c) => p + c, 0) / b.grades.length)
          : (b.grades.reduce((p, c) => p + c, 0) / b.grades.length)
            - (a.grades.reduce((p, c) => p + c, 0) / a.grades.length);
    }
  };

  return localStudents.sort(sortFunction);
}
