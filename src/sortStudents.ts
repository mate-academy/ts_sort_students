
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

function getAvgGrade(grades: number[]): number {
  return grades.reduce((sum: number, prev: number) => sum + prev, 0)
    / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? first[sortBy].localeCompare(second[sortBy])
          : second[sortBy].localeCompare(first[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return copy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? +first[sortBy] - +second[sortBy]
          : +second[sortBy] - +first[sortBy];
      });

    case SortType.AverageGrade:
      return copy.sort((first: Student, second: Student) => {
        return order === 'asc'
          ? getAvgGrade(first[sortBy]) - getAvgGrade(second[sortBy])
          : getAvgGrade(second[sortBy]) - getAvgGrade(first[sortBy]);
      });

    default:
      throw new Error('Enter valid values');
  }
}
