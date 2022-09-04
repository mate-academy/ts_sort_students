
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageAge(nums: number[]): number {
  const result = nums.reduce((prev: number, current: number) => prev + current);

  return result / nums.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copy.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return copy.sort((a, b) => (order === 'asc'
        ? +a[sortBy] - +b[sortBy]
        : +b[sortBy] - +a[sortBy]
      ));

    case SortType.AverageGrade:
      return copy.sort((a, b) => (order === 'asc'
        ? calculateAverageAge(a[sortBy]) - calculateAverageAge(b[sortBy])
        : calculateAverageAge(b[sortBy]) - calculateAverageAge(a[sortBy])
      ));

    default:
      throw new Error('Sorry, wrong arguments !!!');
  }
}
