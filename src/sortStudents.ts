
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  if (grades.length) {
    return grades.reduce((prev, curr) => prev + curr, 0) / grades.length;
  }

  return 0;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  return copyStudents.sort((curr: Student, next: Student) => {
    const currentStudent = order !== 'asc' ? next : curr;
    const nextStudent = order !== 'asc' ? curr : next;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return currentStudent[sortBy].localeCompare(nextStudent[sortBy]);

      case SortType.AverageGrade:
        return getAverageGrade(currentStudent.grades)
          - getAverageGrade(nextStudent.grades);

      default:
        return +currentStudent[sortBy] - +nextStudent[sortBy];
    }
  });
}
