
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

export function getAverageGrades(arr: number[]): number {
  return arr.reduce((sum: number, curr: number) => sum + curr, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return studentsCopy.sort((
        studentA: Student,
        studentB: Student,
      ) => {
        if (order === 'asc') {
          return studentA[sortBy].localeCompare(studentB[sortBy]);
        }

        return studentB[sortBy].localeCompare(studentA[sortBy]);
      });

    case SortType.Surname:
      return studentsCopy.sort((
        studentA: Student,
        studentB: Student,
      ) => {
        if (order === 'asc') {
          return studentA[sortBy].localeCompare(studentB[sortBy]);
        }

        return studentB[sortBy].localeCompare(studentA[sortBy]);
      });

    case SortType.Age:
      return studentsCopy.sort((
        studentA: Student,
        studentB: Student,
      ) => {
        if (order === 'asc') {
          return studentA[sortBy] - studentB[sortBy];
        }

        return studentB[sortBy] - studentA[sortBy];
      });

    case SortType.Married:
      return studentsCopy.sort((
        studentA: Student,
        studentB: Student,
      ) => {
        if (order === 'asc') {
          return Number(studentA[sortBy]) - Number(studentB[sortBy]);
        }

        return +studentB[sortBy] - +studentA[sortBy];
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((
        studentA: Student,
        studentB: Student,
      ) => {
        if (order === 'asc') {
          return getAverageGrades(studentA[sortBy])
          - getAverageGrades(studentB[sortBy]);
        }

        return getAverageGrades(studentB[sortBy])
        - getAverageGrades(studentA[sortBy]);
      });

    default:
      throw new Error('No valid sort');
  }
}
