
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
  const copyStudents: Student[] = [...students];

  function getAvgGrade(grades: number[]): number {
    const sumOfGrades: number = grades
      .reduce((sum: number, current: number) => sum + current);

    return sumOfGrades / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        copyStudents.sort((studentA: Student, studentB: Student): number => {
          return studentA.name.localeCompare(studentB.name);
        });
      } else {
        copyStudents.sort((studentA: Student, studentB: Student): number => {
          return studentB.name.localeCompare(studentA.name);
        });
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        copyStudents.sort((studentA: Student, studentB: Student): number => {
          return studentA.surname.localeCompare(studentB.surname);
        });
      } else {
        copyStudents.sort((studentA: Student, studentB: Student): number => {
          return studentB.surname.localeCompare(studentA.surname);
        });
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        copyStudents.sort((studentA: Student, studentB: Student): number => {
          return studentA.age - studentB.age;
        });
      } else {
        copyStudents.sort((studentA: Student, studentB: Student): number => {
          return studentB.age - studentA.age;
        });
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        copyStudents.sort((studentA: Student, studentB: Student): number => {
          return +studentA.married - +studentB.married;
        });
      } else {
        copyStudents.sort((studentA: Student, studentB: Student): number => {
          return +studentB.married - +studentA.married;
        });
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        copyStudents.sort((studentA: Student, studentB: Student): number => {
          return getAvgGrade(studentA.grades) - getAvgGrade(studentB.grades);
        });
      } else {
        copyStudents.sort((studentA: Student, studentB: Student): number => {
          return getAvgGrade(studentB.grades) - getAvgGrade(studentA.grades);
        });
      }
      break;

    default:
      throw new Error('Unknown sort type');
  }

  return copyStudents;
}
