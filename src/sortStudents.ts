
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

const getAvg = (marks:number[]): number => {
  const avg: number = marks
    .reduce((prev, curent) => prev + curent, 0);

  return avg / marks.length;
};
// create SortOrder type

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order : SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAvg(a[sortBy]) - getAvg(b[sortBy])
          : getAvg(b[sortBy]) - getAvg(a[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      default:
        throw new Error('Something goes wrong, check your arguments');
    }
  });
}
