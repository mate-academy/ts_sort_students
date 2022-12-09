
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

const getAverageNumber = (arr: number[]): number => {
  return arr.reduce((prev, current) => prev + current, 0) / arr.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  return [...students].sort((firstPerson, secondPerson) => {
    const a = order === 'asc'
      ? firstPerson
      : secondPerson;
    const b = order === 'asc'
      ? secondPerson
      : firstPerson;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return Number(a[sortBy]) - Number(b[sortBy]);

      case SortType.AverageGrade:
        return getAverageNumber(a.grades) - getAverageNumber(b.grades);

      default:
        throw Error('This type doesn\'t exist');
    }
  });
}
