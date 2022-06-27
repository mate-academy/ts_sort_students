
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudent = [...students];
  const sortOrder: 1 | -1 = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
      return copyStudent.sort((a: Student, b: Student) => (
        a.name.localeCompare(b.name)) * sortOrder);

    case SortType.Surname:
      return copyStudent.sort((a: Student, b: Student) => (
        a.surname.localeCompare(b.surname) * sortOrder) * sortOrder);

    case SortType.AverageGrade:
      return copyStudent.sort((a: Student, b: Student) => (
        (a.grades.reduce((sum, el) => sum + el, 0) / a.grades.length)
        - (b.grades.reduce((sum, el) => sum + el, 0) / b.grades.length))
        * sortOrder);

    case SortType.Age:
      return copyStudent.sort((a: Student, b: Student) => (
        (a.age - b.age) * sortOrder));

    case SortType.Married:
      return copyStudent.sort((a: Student, b: Student) => (
        (+a.married - +b.married) * sortOrder));

    default: return copyStudent;
  }
}
