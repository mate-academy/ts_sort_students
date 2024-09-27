
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

export function calcAverage(grades: number[]): number {
  return grades.reduce((acc, grade) => {
    return acc + grade;
  }, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((studentA, studentB) => {
    const direction = order === 'asc'
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          studentA[sortBy].localeCompare(studentB[sortBy])
        ) * direction;

      case SortType.Age:
      case SortType.Married:
        return (
          Number(studentA[sortBy]) - Number(studentB[sortBy])
        ) * direction;

      case SortType.AverageGrade:
        return (
          calcAverage(studentA.grades) - calcAverage(studentB.grades)
        ) * direction;

      default:
        throw new Error('unknown sort type');
    }
  });
}
