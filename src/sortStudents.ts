
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        copiedStudents.sort((
          prev: Student, current: Student,
        ) => prev.name.localeCompare(current.name));
        break;

      case SortType.Surname:
        copiedStudents.sort((
          prev: Student, current: Student,
        ) => prev.surname.localeCompare(current.surname));
        break;

      case SortType.Age:
        copiedStudents.sort((
          prev: Student, current: Student,
        ) => prev.age - current.age);
        break;

      case SortType.Married:
        copiedStudents.sort((
          prev: Student, current: Student,
        ) => (+prev.married) - (+current.married));
        break;

      case SortType.AverageGrade:
        copiedStudents.sort((
          prev: Student, current: Student,
        ) => {
          const prevAverageGrades: number = prev.grades.reduce((
            gradesAcc: number, grade: number,
          ) => gradesAcc + grade, 0) / prev.grades.length;
          const currentAverageGrades: number = current.grades.reduce((
            gradesAcc: number, grade: number,
          ) => gradesAcc + grade, 0) / current.grades.length;

          return prevAverageGrades - currentAverageGrades;
        });
        break;

      default:
        throw new Error(`Wrong value ${order} for sorting`);
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
        copiedStudents.sort((
          prev: Student, current: Student,
        ) => current.name.localeCompare(prev.name));
        break;

      case SortType.Surname:
        copiedStudents.sort((
          prev: Student, current: Student,
        ) => current.surname.localeCompare(prev.surname));
        break;

      case SortType.Age:
        copiedStudents.sort((
          prev: Student, current: Student,
        ) => current.age - prev.age);
        break;

      case SortType.Married:
        copiedStudents.sort((
          prev: Student, current: Student,
        ) => (+current.married) - (+prev.married));
        break;

      case SortType.AverageGrade:
        copiedStudents.sort((
          prev: Student, current: Student,
        ) => {
          const prevAverageGrades: number = prev.grades.reduce((
            gradesAcc: number, grade: number,
          ) => gradesAcc + grade, 0) / prev.grades.length;
          const currentAverageGrades: number = current.grades.reduce((
            gradesAcc: number, grade: number,
          ) => gradesAcc + grade, 0) / current.grades.length;

          return currentAverageGrades - prevAverageGrades;
        });
        break;

      default:
        throw new Error(`Wrong value ${order} for sorting`);
    }
  }

  return copiedStudents;
}
