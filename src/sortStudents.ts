
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function averGrade(arr: number[]): number {
    const grade = arr.reduce((sum: number, a: number):
    number => sum + a, 0) / arr.length;

    return grade;
  }

  const newStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return newStudents.sort((
        a: Student,
        b: Student,
      ): number => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
      return newStudents.sort((
        a: Student,
        b: Student,
      ): number => {
        return (order === 'asc')
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.Married:
      return newStudents.sort((
        a: Student,
        b: Student,
      ): number => {
        return (order === 'asc')
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
    case SortType.AverageGrade:
      return newStudents.sort((
        a: Student,
        b: Student,
      ): number => {
        return order === 'asc'
          ? averGrade(a.grades) - averGrade(b.grades)
          : averGrade(b.grades) - averGrade(a.grades);
      });
    default:
      throw new Error('No correct data');
  }
}
