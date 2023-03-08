
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

export function getAvaregeGrade({ grades }: Student): number {
  return grades.reduce((prevGrade, currGrade) => prevGrade + currGrade, 0)
  / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((studentA, studentB) => {
    const sortMethod = order === 'asc'
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          studentA[sortBy].localeCompare(studentB[sortBy])
        ) * sortMethod;

      case SortType.Age:
      case SortType.Married:
        return (
          Number(studentA[sortBy]) - Number(studentB[sortBy])
        ) * sortMethod;

      case SortType.AverageGrade:
        return (
          getAvaregeGrade(studentA) - getAvaregeGrade(studentB)
        ) * sortMethod;

      default:
        throw new Error(`Insert correct ${sortBy}`);
    }
  });
}
