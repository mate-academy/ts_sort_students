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

export function getAverageGrade(arr: number[]): number {
  return (
    arr.reduce((prev: number, item: number) => prev + item, 0) / arr.length
  );
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((personOne: Student, personTwo: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? personOne[sortBy].localeCompare(personTwo[sortBy])
          : personTwo[sortBy].localeCompare(personOne[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(personOne[sortBy]) - Number(personTwo[sortBy])
          : Number(personTwo[sortBy]) - Number(personOne[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(personOne[sortBy])
          - getAverageGrade(personTwo[sortBy])
          : getAverageGrade(personTwo[sortBy])
          - getAverageGrade(personOne[sortBy]);

      default:
        throw new Error('Invalid input type');
    }
  });
}
