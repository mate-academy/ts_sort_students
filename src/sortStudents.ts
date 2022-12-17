
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

const getAverageGrade = (arrayOfGrades: number[]): number => {
  return arrayOfGrades.reduce((acc, curr) => acc + curr, 0)
  / arrayOfGrades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((firstStudent, secondStudent) => {
    const a = order === 'asc'
      ? firstStudent
      : secondStudent;
    const b = order === 'asc'
      ? secondStudent
      : firstStudent;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return Number(a[sortBy]) - Number(b[sortBy]);

      case SortType.AverageGrade:
        return getAverageGrade(a.grades) - getAverageGrade(b.grades);

      default:
        throw new Error('Error: Unknown sort type');
    }
  });
}
