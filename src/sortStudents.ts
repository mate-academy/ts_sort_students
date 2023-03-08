
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
    const orderType = (order === 'asc' ? 1 : -1);

    switch (sortBy) {
      case SortType.Surname:
      case SortType.Name:
        return previous[sortBy].localeCompare(current[sortBy])
          * orderType;

      case SortType.Married:
      case SortType.Age:
        return (Number(previous[sortBy]) - Number(current[sortBy]))
          * orderType;

      case SortType.AverageGrade:
        return (calcAverage(previous) - calcAverage(current))
          * orderType;

      default:
        return 0;
    }
  });
}
