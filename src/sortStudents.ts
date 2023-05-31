
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
  AverageGrade = 'average_grade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((studentA: Student, studentB: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentA[sortBy].localeCompare(studentB[sortBy]);

      case SortType.AverageGrade: {
        const avgGradeA = getAverageGrade(studentA.grades);
        const avgGradeB = getAverageGrade(studentB.grades);

        return order === 'asc'
          ? avgGradeA - avgGradeB
          : avgGradeB - avgGradeA;
      }

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);

      default:
        return 0;
    }
  });
}
