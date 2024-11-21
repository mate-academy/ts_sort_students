
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

const getAverageGrades = (nums: number[]): number => nums
  .reduce((acc, el) => acc + el) / nums.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  return copyStudents.sort((prev, curr) => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(prev[sortBy]) - Number(curr[sortBy])
          : Number(curr[sortBy]) - Number(prev[sortBy]);

      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? prev[sortBy].localeCompare(curr[sortBy])
          : curr[sortBy].localeCompare(prev[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrades(prev[sortBy]) - getAverageGrades(curr[sortBy])
          : getAverageGrades(curr[sortBy]) - getAverageGrades(prev[sortBy]);

      default:
        return 0;
    }
  });
}
