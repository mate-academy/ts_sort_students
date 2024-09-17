const averageGrade = (grades:number[]):number => (
  grades.reduce((sum: number, grade: number) => (
    sum + grade), 0) / grades.length);

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
  students:object[], sortBy: SortType, order: SortOrder,
): object[] {
  const byAverageGrade = sortBy === 'grades';
  const sortingOrder = order === 'asc' ? 1 : -1;

  return [...students].sort((firstStudent, secondStudent) => {
    const firstSortingValue = byAverageGrade
      ? averageGrade(firstStudent[sortBy]) : firstStudent[sortBy];

    const secondSortingValue = byAverageGrade
      ? averageGrade(secondStudent[sortBy]) : secondStudent[sortBy];

    return (sortBy === 'name' || sortBy === 'surname'
      ? firstSortingValue.localeCompare(secondSortingValue)
      : firstSortingValue - secondSortingValue) * sortingOrder;
  });
}
