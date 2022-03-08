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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((accum, current) => accum + current) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): object[] {
  return [...students].sort((a: Student, b: Student) => {
    const studentA = order === 'asc' ? a : b;
    const studentB = order === 'asc' ? b : a;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return studentA[sortBy].localeCompare(studentB[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return <number>studentA[sortBy] - <number>studentB[sortBy];

      case SortType.AverageGrade: {
        const studentAGrade = getAverageGrade(studentA.grades);
        const studentBGrade = getAverageGrade(studentB.grades);

        return studentAGrade - studentBGrade;
      }
      default:
        return 0;
    }
  });
}
