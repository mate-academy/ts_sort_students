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

function getAverage(arr: number[]): number {
  return arr.reduce((sum, item) => sum + item, 0)
  / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result: Student[] = [...students];

  result.sort((st1: Student, st2: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? st1[sortBy].localeCompare(st2[sortBy])
          : st2[sortBy].localeCompare(st1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc')
          ? +st1[sortBy] - +st2[sortBy]
          : +st2[sortBy] - +st1[sortBy];

      case SortType.AverageGrade:
        return (order === 'asc')
          ? getAverage(st1[sortBy]) - getAverage(st2[sortBy])
          : getAverage(st2[sortBy]) - getAverage(st1[sortBy]);

      default:
        throw new Error('Error');
    }
  });

  return result;
}
