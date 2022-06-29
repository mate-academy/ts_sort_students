
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
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]) * sortOrder;

      case SortType.Age:
      case SortType.Married:
        return (+a[sortBy] - +b[sortBy]) * sortOrder;

      case SortType.AverageGrade:
        return (getAvarageGrade(a.grades)
        - getAvarageGrade(b.grades)) * sortOrder;

      default:
        return 0;
    }
  });

  return copyStudents;
}
