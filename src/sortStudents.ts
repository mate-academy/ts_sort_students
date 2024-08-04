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

function sortByProperty(
  studentA: Student,
  studentB: Student,
  sortBy: SortType,
): number {
  switch (sortBy) {
    case SortType.Age:
    case SortType.Married:
      return Number(studentA[sortBy]) - Number(studentB[sortBy]);

    case SortType.AverageGrade: {
      const averageGradeA = calculateAverageGrade(studentA[sortBy]);
      const averageGradeB = calculateAverageGrade(studentB[sortBy]);

      return averageGradeA - averageGradeB;
    }

    case SortType.Name:
    case SortType.Surname:
      return studentA[sortBy].localeCompare(studentB[sortBy]);

    default:
      throw new Error('Wrong property name');
  }
}

export function sortStudents(
  students: readonly Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  return order === 'asc'
    ? studentsCopy.sort((studentA, studentB) => {
      return sortByProperty(studentA, studentB, sortBy);
    })
    : studentsCopy.sort((studentA, studentB) => {
      return sortByProperty(studentB, studentA, sortBy);
    });
}
