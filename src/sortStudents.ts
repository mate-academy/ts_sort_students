
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'desk' | 'asc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const countAverage = (numbers: number[]): number => {
    return numbers
      .reduce((prev, curr) => prev + curr, 0) / numbers.length;
  };
  const orderAsc = order === 'asc';

  return [...students].sort((prev, curr) => {
    switch (sortBy) {
      case 'married':
      case 'age':
        return orderAsc
          ? (+prev[sortBy]) - (+curr[sortBy])
          : (+curr[sortBy]) - (+prev[sortBy]);

      case 'name':
      case 'surname':
        return orderAsc
          ? prev[sortBy].localeCompare(curr[sortBy])
          : curr[sortBy].localeCompare(prev[sortBy]);

      default:
        return orderAsc
          ? countAverage(prev.grades) - countAverage(curr.grades)
          : countAverage(curr.grades) - countAverage(prev.grades);
    }
  });
}
