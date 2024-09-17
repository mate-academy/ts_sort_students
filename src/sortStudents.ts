
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

function calculateAvgerage(grades: number[]): number {
  const totalGrades: number
    = grades.reduce((firstMark: number, secondMark: number) => (
      firstMark + secondMark));

  return totalGrades / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const result: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return result.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return result.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? +studentA[sortBy] - +studentB[sortBy]
          : +studentB[sortBy] - +studentA[sortBy];
      });

    case SortType.AverageGrade:
      return result.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? calculateAvgerage(studentA[sortBy])
            - calculateAvgerage(studentB[sortBy])
          : calculateAvgerage(studentB[sortBy])
            - calculateAvgerage(studentA[sortBy]);
      });

    default:
      return [];
  }
}
