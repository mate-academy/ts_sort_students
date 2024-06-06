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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const direction: -1 | 1 = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return [...students].sort(
        ({ [sortBy]: paramA }, { [sortBy]: paramB }) => (
          paramA.localeCompare(paramB) * direction
        ),
      );

    case SortType.Age:
    case SortType.Married:
      return [...students].sort(
        ({ [sortBy]: paramA }, { [sortBy]: paramB }) => (
          (Number(paramA) - Number(paramB)) * direction
        ),
      );

    case SortType.AverageGrade:
      return [...students].sort(
        ({ [sortBy]: paramA }, { [sortBy]: paramB }) => {
          const getAverage = (param: number[]): number => (
            param.reduce((sum, num) => sum + num, 0) / param.length
          );

          return (getAverage(paramA) - getAverage(paramB)) * direction;
        },
      );

    default:
      return [...students];
  }
}
