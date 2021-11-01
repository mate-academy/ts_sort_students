
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

function averageGrade(grades: number[]): number {
  return grades.reduce((prev, current) => prev + current, 0) / grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];
  const isAscending: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      return copyStudents.sort(isAscending
        ? (student1: Student, student2: Student): number => (
          student1.name.localeCompare(student2.name))
        : (student1: Student, student2: Student): number => (
          student2.name.localeCompare(student1.name)));

    case SortType.Surname:
      return copyStudents.sort(isAscending
        ? (student1: Student, student2: Student): number => (
          student1.surname.localeCompare(student2.surname))
        : (student1: Student, student2: Student): number => (
          student2.surname.localeCompare(student1.surname)));

    case SortType.Age:
      return copyStudents.sort(isAscending
        ? (student1: Student, student2: Student): number => (
          student1.age - student2.age)
        : (student1: Student, student2: Student): number => (
          student2.age - student1.age));

    case SortType.Married:
      return copyStudents.sort(isAscending
        ? (student1: Student, student2: Student): number => (
          Number(student1.married) - Number(student2.married))
        : (student1: Student, student2: Student): number => (
          Number(student2.married) - Number(student1.married)));

    case SortType.AverageGrade:
      return copyStudents.sort(isAscending
        ? (student1: Student, student2: Student): number => (
          averageGrade(student1.grades) - averageGrade(student2.grades))
        : (student1: Student, student2: Student): number => (
          averageGrade(student2.grades) - averageGrade(student1.grades)));

    default: return students;
  }
}
