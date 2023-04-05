
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function countAverage(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((firstStudent, secondStudent) => {
    const studentA = order === 'asc' ? firstStudent : secondStudent;
    const studentB = order === 'asc' ? secondStudent : firstStudent;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return studentA[sortBy].localeCompare(studentB[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return Number(studentA[sortBy]) - Number(studentB[sortBy]);

      case SortType.AverageGrade:
        return countAverage(studentA[sortBy]) - countAverage(studentB[sortBy]);

      default:
        throw new Error('Error. Check your input data types.');
    }
  });
}
