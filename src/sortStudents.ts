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
  AverageGrade = 'averageGrade',
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
  const studentsCopy = [...students];
  const comparisonModifier = order === 'asc' ? 1 : -1;

  studentsCopy.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          studentA[sortBy].localeCompare(studentB[sortBy])
        ) * comparisonModifier;

      case SortType.Age:
      case SortType.Married:
        return (
          +studentA[sortBy] - +studentB[sortBy]
        ) * comparisonModifier;

      case SortType.AverageGrade:
        return (
          getAverageGrade(studentA.grades)
          - getAverageGrade(studentB.grades)
        ) * comparisonModifier;

      default:
        throw new Error(`Unsupported sort type: ${sortBy}`);
    }
  });

  return studentsCopy;
}
