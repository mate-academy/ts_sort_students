
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

function getAverage(grade: number[]): number {
  return grade.reduce((sum, curr) => sum + curr) / grade.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return result.sort((prev: Student, curr: Student) => {
        return order === 'asc'
          ? prev[sortBy].localeCompare(curr[sortBy])
          : curr[sortBy].localeCompare(prev[sortBy]);
      });

    case SortType.AverageGrade:
      return result.sort((prev: Student, curr: Student) => {
        return order === 'asc'
          ? getAverage(prev[sortBy]) - getAverage(curr[sortBy])
          : getAverage(curr[sortBy]) - getAverage(prev[sortBy]);
      });

    default:
      result.sort((prev: Student, curr: Student) => {
        return order === 'asc'
          ? +prev[sortBy] - (+curr[sortBy])
          : +curr[sortBy] - (+prev[sortBy]);
      });
  }

  return result;
}
