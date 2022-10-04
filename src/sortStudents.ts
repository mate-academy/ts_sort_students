
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

function getAverage(studentGrades: number[]): number {
  return studentGrades.reduce((sum: number, curr: number) => (
    sum + curr
  ), 0) / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  return studentsCopy.sort((
    prevStudent: Student,
    currStudent: Student,
  ): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? prevStudent[sortBy].localeCompare(currStudent[sortBy])
          : currStudent[sortBy].localeCompare(prevStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(prevStudent[sortBy]) - Number(currStudent[sortBy])
          : Number(currStudent[sortBy]) - Number(prevStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(prevStudent[sortBy]) - getAverage(currStudent[sortBy])
          : getAverage(currStudent[sortBy]) - getAverage(prevStudent[sortBy]);

      default:
        return 0;
    }
  });
}
