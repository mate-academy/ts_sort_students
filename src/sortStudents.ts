
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

function averageGrade(grades:number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  return sortedStudents.sort((studentA: Student, studentB: Student): number => {
    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      return order === 'asc'
        ? studentA[sortBy].localeCompare(studentB[sortBy])
        : studentB[sortBy].localeCompare(studentA[sortBy]);
    }

    if (sortBy === SortType.Age || sortBy === SortType.Married) {
      return order === 'asc'
        ? studentA[sortBy] - studentB[sortBy]
        : studentB[sortBy] - studentA[sortBy];
    }

    return order === 'asc'
      ? averageGrade(studentA.grades) - averageGrade(studentB.grades)
      : averageGrade(studentB.grades) - averageGrade(studentA.grades);
  });
}
