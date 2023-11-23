
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: Array<number>;
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
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  let sortingCallback;

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    sortingCallback = (student1: Student, student2: Student): number => {
      return order === 'asc'
        ? student1[sortBy].localeCompare(student2[sortBy])
        : student2[sortBy].localeCompare(student1[sortBy]);
    };
  }

  if (sortBy === SortType.Age) {
    sortingCallback = (student1: Student, student2: Student): number => {
      return order === 'asc'
        ? student1[sortBy] - student2[sortBy]
        : student2[sortBy] - student1[sortBy];
    };
  }

  if (sortBy === SortType.Married) {
    sortingCallback = (a: Student, b: Student): number => {
      if (a[sortBy] === b[sortBy]) {
        return 0;
      }

      if (order === 'asc') {
        return a[sortBy] ? 1 : -1;
      }

      return a[sortBy] ? -1 : 1;
    };
  }

  if (sortBy === SortType.AverageGrade) {
    sortingCallback = (student1: Student, student2: Student): number => {
      const average1: number = student1.grades
        .reduce((total, curr) => total + curr, 0) / student1.grades.length;

      const average2: number = student2.grades
        .reduce((total, curr) => total + curr, 0) / student2.grades.length;

      return order === 'asc'
        ? average1 - average2
        : average2 - average1;
    };
  }

  return [...students].sort(sortingCallback);
}
