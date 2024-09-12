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

function getAverage(grades: number[]): number {
  return grades.reduce((sum: number, mark: number): number => (
    sum + mark
  ), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const callback = (studentA: Student, studentB: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return studentA[sortBy].localeCompare(studentB[sortBy]);
        }

        return studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age:
      case SortType.Married:
        if (order === 'asc') {
          return +studentA[sortBy] - +studentB[sortBy];
        }

        return +studentB[sortBy] - +studentA[sortBy];

      case SortType.AverageGrade:
        if (order === 'asc') {
          return getAverage(studentA[sortBy]) - getAverage(studentB[sortBy]);
        }

        return getAverage(studentB[sortBy]) - getAverage(studentA[sortBy]);

      default:
        return 0;
    }
  };

  const sortedData: Student[] = [...students].sort(callback);

  return sortedData;
}
