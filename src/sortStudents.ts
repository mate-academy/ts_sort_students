
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
  return grades.reduce((sum, prev) => sum + prev, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsClone = [...students];

  return studentsClone.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:

        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? studentA[sortBy] - studentB[sortBy]
          : studentB[sortBy] - studentA[sortBy];

      case SortType.Married:
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(studentA[sortBy]) - getAverage(studentB[sortBy])
          : getAverage(studentB[sortBy]) - getAverage(studentA[sortBy]);

      default:
        throw new Error('No such sort type');
    }
  });
}
