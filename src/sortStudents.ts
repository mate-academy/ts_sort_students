
export interface Student {
  name: string;
  surname: string;
  age: number;
  married?: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calcAvgGrade(arrOfGrades: number[]): number {
  return arrOfGrades.reduce((x: number, y:number) => {
    return x + y;
  }) / arrOfGrades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyOfSt: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyOfSt.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return copyOfSt.sort((x: Student, y: Student) => {
        return order === 'asc'
          ? x[sortBy] - y[sortBy]
          : y[sortBy] - x[sortBy];
      });

    case SortType.AverageGrade:
      return copyOfSt.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? calcAvgGrade(a[sortBy]) - calcAvgGrade(b[sortBy])
          : calcAvgGrade(b[sortBy]) - calcAvgGrade(a[sortBy]);
      });

    default:
      throw new Error('Please push correct sort type');
  }
}
