/* eslint-disable max-len */

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

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

function AverageGrade(arrGrades: number[]): number {
  return arrGrades.reduce((a, b) => a + b, 0) / arrGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  return studentsCopy.sort((student1: Student, student2: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === SortOrder.Asc
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === SortOrder.Asc
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];

      case SortType.AverageGrade:
        return order === SortOrder.Asc
          ? AverageGrade(student1[sortBy])
            - AverageGrade(student2[sortBy])
          : AverageGrade(student2[sortBy])
            - AverageGrade(student1[sortBy]);
      default:
        return 0;
    }
  });
}
