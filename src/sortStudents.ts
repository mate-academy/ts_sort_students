
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

function average(grades: number[]) : number {
  return grades.reduce((acc, mark) => acc + mark, 0) / grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((prev, next) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? prev[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(prev[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(prev[sortBy]) - Number(next[sortBy])
          : Number(next[sortBy]) - Number(prev[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? average(prev[sortBy]) - average(next[sortBy])
          : average(next[sortBy]) - average(prev[sortBy]);

      default: throw Error('Please check sort parameter');
    }
  });
}
