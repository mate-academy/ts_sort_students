
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
  const countAverage = (x: number[]): number => {
    return x
      .reduce((prev, curr) => prev + curr, 0) / x.length;
  };

  return [...students].sort((x, y) => {
    switch (sortBy) {
      case 'married':
      case 'age':
        if (order === 'asc') {
          return (+x[sortBy]) - (+y[sortBy]);
        }

        return (+y[sortBy]) - (+x[sortBy]);

      case 'name':
      case 'surname':
        if (order === 'asc') {
          return x[sortBy].localeCompare(y[sortBy]);
        }

        return y[sortBy].localeCompare(x[sortBy]);

      case 'averageGrade':
      default:
        if (order === 'asc') {
          return countAverage(x.grades) - countAverage(y.grades);
        }

        return countAverage(y.grades) - countAverage(x.grades);
    }
  });
}
