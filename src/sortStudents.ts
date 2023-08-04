
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(grades: number[]): number {
  return grades.reduce((sum: number, grade: number): number => (
    sum + grade), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy
        .sort((studentA: Student, studentB: Student) => {
          if (order === 'asc') {
            return studentA[sortBy].localeCompare(studentB[sortBy]);
          }

          return studentB[sortBy].localeCompare(studentA[sortBy]);
        });
      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy
        .sort((studentA: Student, studentB: Student) => {
          if (order === 'asc') {
            return +studentA[sortBy] - +studentB[sortBy];
          }

          return +studentB[sortBy] - +studentA[sortBy];
        });
      break;

    case SortType.AverageGrade:
      studentsCopy
        .sort((studentA: Student, studentB: Student) => {
          if (order === 'asc') {
            return calculateAverageGrade(studentA[sortBy])
            - calculateAverageGrade(studentB[sortBy]);
          }

          return calculateAverageGrade(studentB[sortBy])
            - calculateAverageGrade(studentA[sortBy]);
        });
      break;

    default:
      break;
  }

  return studentsCopy;
}
