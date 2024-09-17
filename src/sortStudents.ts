export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades.reduce((a, b) => a + b) / student.grades.length || 1;
}

function defaultCompare(
  student1: string | number | boolean,
  student2: string | number | boolean,
  order: SortOrder,
): number {
  if (student1 > student2) {
    return order === 'asc'
      ? 1
      : -1;
  }

  if (student1 < student2) {
    return order === 'asc'
      ? -1
      : 1;
  }

  return 0;
}

export function sortStudents(
  students: Student[],
  sortBy: string,
  order: SortOrder,
): Student[] {
  switch (sortBy) {
    case SortType.AverageGrade:
      return [...students].sort((student1, student2) => (order === 'asc'
        ? getAverageGrade(student1) - getAverageGrade(student2)
        : getAverageGrade(student2) - getAverageGrade(student1)));
    default:
      return [...students]
        .sort((student1, student2) => defaultCompare(
          student1[sortBy],
          student2[sortBy],
          order,
        ));
  }
}
