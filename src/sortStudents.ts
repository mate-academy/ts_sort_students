
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

export type SortOrder = 'asc' | 'desc';

function gradesSum(grades: number[]): number {
  return grades.reduce((sum, num) => sum + num, 0) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const isAscanding = order === 'asc';
  const studentForSort: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name: {
      return studentForSort.sort(isAscanding
        ? (student1: Student, student2: Student): number => (
          student1.name.localeCompare(student2.name))
        : (student1: Student, student2: Student): number => (
          student2.name.localeCompare(student1.name)));
    }

    case SortType.Surname: {
      return studentForSort.sort(isAscanding
        ? (student1: Student, student2: Student): number => (
          student1.surname.localeCompare(student2.surname))
        : (student1: Student, student2: Student): number => (
          student2.surname.localeCompare(student1.surname)));
    }

    case SortType.Age: {
      return studentForSort.sort(isAscanding
        ? (student1: Student, student2: Student): number => (
          student1.age - student2.age)
        : (student1: Student, student2: Student): number => (
          student2.age - student1.age));
    }

    case SortType.Married: {
      return studentForSort.sort(isAscanding
        ? (student1: Student, student2: Student): number => (
          Number(student1.married) - Number(student2.married))
        : (student1: Student, student2: Student): number => (
          Number(student2.married) - Number(student1.married)));
    }

    case SortType.AverageGrade: {
      return studentForSort.sort(isAscanding
        ? (student1: Student, student2: Student): number => (
          gradesSum(student1.grades) - gradesSum(student2.grades))
        : (student1: Student, student2: Student): number => (
          gradesSum(student2.grades) - gradesSum(student1.grades)));
    }

    default: return students;
  }
}
