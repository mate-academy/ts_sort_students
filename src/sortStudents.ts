
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

function getAverageGrade(arr: number[]): number {
  return arr.reduce((prev: number, first: number) => prev + first, 0)
    / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((firstStudent: Student, secondStudent) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
          : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(firstStudent[sortBy])
          - getAverageGrade(secondStudent[sortBy])
          : getAverageGrade(secondStudent[sortBy])
          - getAverageGrade(firstStudent[sortBy]);
      default: throw new Error('invalid input data');
    }
  });
}
