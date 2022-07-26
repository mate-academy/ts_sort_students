
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

function sumGrades(arr:number[]):number {
  return arr.reduce((sum, next) => (
    sum + next
  ), 0) / arr.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
): object[] {
  return [...students].sort((x:Student, y:Student) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? x[sortBy].localeCompare(y[sortBy])
          : y[sortBy].localeCompare(x[sortBy]);

      case SortType.Surname:
        return order === 'asc'
          ? x[sortBy].localeCompare(y[sortBy])
          : y[sortBy].localeCompare(x[sortBy]);

      case SortType.Age:
        return order === 'asc' ? x[sortBy] - y[sortBy] : y[sortBy] - x[sortBy];

      case SortType.Married:
        return order === 'asc'
          ? Number(x[sortBy]) - Number(y[sortBy])
          : Number(y[sortBy]) - Number(x[sortBy]);

      default: {
        return order === 'asc'
          ? sumGrades(x[sortBy]) - sumGrades(y[sortBy])
          : sumGrades(y[sortBy]) - sumGrades(x[sortBy]);
      }
    }
  });
}
