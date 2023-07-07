
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
  return grades.reduce((grade, total) => (total + grade), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  const sortOrder: number = order === 'asc' ? 1 : -1;

  return copiedStudents.sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return student1[sortBy].localeCompare(student2[sortBy]) * sortOrder;

      case SortType.Age:
      case SortType.Married:
        return (Number(student1[sortBy])
        - Number(student2[sortBy])) * sortOrder;

      case SortType.AverageGrade:
        return (getAverageGrade(student1[sortBy])
        - getAverageGrade(student2[sortBy])) * sortOrder;

      default:
        return 0;
    }
  });
}
