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

function calculateAverageGrade(grades: readonly number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: readonly Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((studentA, studentB) => {
          return Number(studentA[sortBy]) - Number(studentB[sortBy]);
        })
        : studentsCopy.sort((studentA, studentB) => {
          return Number(studentB[sortBy]) - Number(studentA[sortBy]);
        });

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((studentA, studentB) => {
          const averageGradeA = calculateAverageGrade(studentA[sortBy]);
          const averageGradeB = calculateAverageGrade(studentB[sortBy]);

          return averageGradeA - averageGradeB;
        })
        : studentsCopy.sort((studentA, studentB) => {
          const averageGradeA = calculateAverageGrade(studentA[sortBy]);
          const averageGradeB = calculateAverageGrade(studentB[sortBy]);

          return averageGradeB - averageGradeA;
        });

    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((studentA, studentB) => {
          return studentA[sortBy].localeCompare(studentB[sortBy]);
        })
        : studentsCopy.sort((studentA, studentB) => {
          return studentB[sortBy].localeCompare(studentA[sortBy]);
        });

    default:
      throw new Error('Wrong property name');
  }
}
