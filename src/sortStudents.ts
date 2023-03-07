
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

function calcAverage({ grades }: Student): number {
  return grades.reduce((grade, sum) => grade + sum, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((previous, current) => {
    switch (sortBy) {
      case SortType.Surname:
      case SortType.Name:
        return order === 'asc'
          ? previous[sortBy].localeCompare(current[sortBy])
          : current[sortBy].localeCompare(previous[sortBy]);

      case SortType.Married:
      case SortType.Age:
        return order === 'asc'
          ? Number(previous[sortBy]) - Number(current[sortBy])
          : Number(current[sortBy]) - Number(previous[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? calcAverage(previous) - calcAverage(current)
          : calcAverage(current) - calcAverage(previous);

      default:
        throw new Error('Something going wrong...');
    }
  });
}
