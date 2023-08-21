
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
  const calculateAverageGrade = (grades: number[]): number => {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  };

  const compareStudents = (studentA: Student, studentB: Student): number => {
    const valueA = sortBy === SortType.AverageGrade
      ? calculateAverageGrade(studentA[SortType.AverageGrade])
      : studentA[sortBy];

    const valueB = sortBy === SortType.AverageGrade
      ? calculateAverageGrade(studentB[SortType.AverageGrade])
      : studentB[sortBy];

    if (valueA < valueB) {
      return order === 'asc' ? -1 : 1;
    }

    if (valueA > valueB) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  };

  return [...students].sort(compareStudents);
}
