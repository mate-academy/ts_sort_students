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
  AverageGrade = 'grade',
}

export function getAverage({ grades }: Student): number {
  return grades.reduce((startValue, currentValue) => startValue + currentValue)
    / grades.length;
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((firstPupil, secondPupil) => {
    const sort = order === SortOrder.Asc
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (firstPupil[sortBy].localeCompare(secondPupil[sortBy]))
        * sort;

      case SortType.Age:
      case SortType.Married:
        return (Number(firstPupil[sortBy]) - Number(secondPupil[sortBy]))
        * sort;

      case SortType.AverageGrade:
        return (getAverage(firstPupil) - getAverage(secondPupil))
        * sort;

      default:
        throw new Error();
    }
  });
}
