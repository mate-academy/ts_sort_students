
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name, Surname, Age, Married, AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function getAvarageGrade(studentGrades: number[]): number {
  return studentGrades
    .reduce((sum, grade) => sum + grade)
    / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];
  const sortOrder: number = order === 'asc' ? 1 : -1;

  copyStudents.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name) * sortOrder;

      case SortType.Surname:
        return a.surname.localeCompare(b.surname) * sortOrder;

      case SortType.Age:
        return (a.age - b.age) * sortOrder;

      case SortType.Married:
        return (+a.married - +b.married) * sortOrder;

      case SortType.AverageGrade:
        return (getAvarageGrade(a.grades)
        - getAvarageGrade(b.grades)) * sortOrder;

      default:
        return 0;
    }
  });

  return copyStudents;
}
