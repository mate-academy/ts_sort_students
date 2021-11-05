export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export type FSort = (
  students: Student[],
  sortBy: SortType,
  order: SortOrder
) => Student[];

export const sortStudents:FSort = (
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) => {
  // write your function
  if (sortBy === SortType.Name) {
    if (order === 'asc') {
      return [...students]
        .sort((student1, student2) => student1.name
          .localeCompare(student2.name));
    }

    if (order === 'desc') {
      return [...students]
        .sort((student1, student2) => student2.name
          .localeCompare(student1.name));
    }
  }

  if (sortBy === SortType.Surname) {
    if (order === 'asc') {
      return [...students].sort((student1, student2) => student1.surname
        .localeCompare(student2.surname));
    }

    if (order === 'desc') {
      return [...students].sort((student1, student2) => student2.surname
        .localeCompare(student1.surname));
    }
  }

  if (sortBy === SortType.Age) {
    if (order === 'asc') {
      return [...students]
        .sort((student1, student2) => student1.age - student2.age);
    }

    if (order === 'desc') {
      return [...students]
        .sort((student1, student2) => student2.age - student1.age);
    }
  }

  if (sortBy === SortType.Married) {
    if (order === 'asc') {
      return [...students].sort(
        (student1, student2) => (student1.married ? 1 : 0)
          - (student2.married ? 1 : 0),
      );
    }

    if (order === 'desc') {
      return [...students].sort(
        (student1, student2) => (student2.married ? 1 : 0)
          - (student1.married ? 1 : 0),
      );
    }
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      return [...students].sort(
        (student1, student2) => student1.grades
          .reduce((a, b) => a + b, 0) / student1.grades.length
          - student2.grades
            .reduce((a, b) => a + b, 0) / student2.grades.length,
      );
    }

    if (order === 'desc') {
      return [...students].sort(
        (student1, student2) => student2.grades
          .reduce((a, b) => a + b, 0) / student2.grades.length
          - student1.grades
            .reduce((a, b) => a + b, 0) / student1.grades.length,
      );
    }
  }

  return students;
};
