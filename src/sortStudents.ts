
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
  AverageGrade = 'average',
}

const AverageGrade
  = (arr: number[]): number => {
    if (arr.length === 0) {
      return 0;
    }

    return arr.reduce((a: number, b: number) => a + b, 0) / arr.length;
  };

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const orderType = order === 'asc';

  switch (sortBy) {
    case 'name':
    case 'surname':
      return orderType
        ? studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case 'age':
    case 'married':
      return orderType
        ? studentsCopy.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : studentsCopy.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case 'average':
      return orderType
        ? studentsCopy
          .sort((a, b) => AverageGrade(a.grades) - AverageGrade(b.grades))
        : studentsCopy
          .sort((a, b) => AverageGrade(b.grades) - AverageGrade(a.grades));

    default:
      throw new Error('no such sort type');
  }
}
