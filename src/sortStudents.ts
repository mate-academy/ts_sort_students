/* eslint-disable linebreak-style */
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
  const getAverageGrade = (grades: number[]): number => {
    return grades.length
      ? grades.reduce((sum, grade) => sum + grade, 0) / grades.length
      : 0;
  };

  const sortedStudents = [...students].sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(studentA.grades) - getAverageGrade(studentB.grades)
          : getAverageGrade(studentB.grades) - getAverageGrade(studentA.grades);

      default:
        throw new Error('Unknown sorting type!');
    }
  });

  return sortedStudents;
}
