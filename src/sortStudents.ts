
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

function getAverage(studentGrades: number[]): number {
  return studentGrades.reduce((accum: number, current: number) => (
    accum + current
  ), 0) / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentCopy = [...students];

  return studentCopy.sort((
    student1: Student,
    student2: Student,
  ): number => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];

      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(student1[sortBy]) - getAverage(student2[sortBy])
          : getAverage(student2[sortBy]) - getAverage(student1[sortBy]);

      default:
        return 0;
    }
  });
}
