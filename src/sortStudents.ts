
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents: Student[] = [...students];
  const sortOrder = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:

      return copiedStudents.sort(
        (studentA: Student, studentB: Student) => {
          return studentA.name.localeCompare(studentB.name) * sortOrder;
        },
      );

    case SortType.Surname:

      return copiedStudents.sort(
        (studentA: Student, studentB: Student) => {
          return studentA.surname.localeCompare(studentB.surname) * sortOrder;
        },
      );

    case SortType.Age:

      return copiedStudents.sort(
        (studentA: Student, studentB: Student) => {
          return (studentA.age - studentB.age) * sortOrder;
        },
      );

    case SortType.Married:

      return copiedStudents.sort(
        (studentA: Student, studentB: Student) => {
          return (Number(studentA.married) - Number(studentB.married))
          * sortOrder;
        },
      );

    case SortType.AverageGrade:

      return copiedStudents.sort(
        (studentA: Student, studentB: Student) => {
          const avgA = studentA.grades.reduce((sum, grade) => sum + grade)
          / studentA.grades.length;
          const avgB = studentB.grades.reduce((sum, grade) => sum + grade)
          / studentB.grades.length;

          return (avgA - avgB) * sortOrder;
        },
      );

    default:
      throw new Error('Error');
  }
}
