
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

function getAverage(numbers: number[]): number {
  return numbers.reduce((acc, num) => (acc + num)) / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((current: Student, next: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return current[sortBy].localeCompare(next[sortBy])
          * (order === 'asc' ? 1 : -1);

      case SortType.Age:
      case SortType.Married:
        return (+current[sortBy] - +next[sortBy])
          * (order === 'asc' ? 1 : -1);

      case SortType.AverageGrade:
        return (getAverage(current[sortBy]) - getAverage(next[sortBy]))
          * (order === 'asc' ? 1 : -1);

      default:
        throw new Error(`Inappropriate argument: ${sortBy}`);
    }
  });
}
