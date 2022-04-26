
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((stuA, stuB) => {
    const studentA: Student = order === 'asc' ? stuA : stuB;
    const studentB: Student = order === 'asc' ? stuB : stuA;

    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      return studentA[sortBy].localeCompare(studentB[sortBy]);
    }

    if (sortBy === SortType.AverageGrade) {
      const avarageGradeA = studentA[sortBy].reduce((a, b) => a + b)
      / studentA[sortBy].length;
      const avarageGradeB = studentB[sortBy].reduce((a, b) => a + b)
      / studentB[sortBy].length;

      return avarageGradeA - avarageGradeB;
    }

    return +studentA[sortBy] - +studentB[sortBy];
  });
}
