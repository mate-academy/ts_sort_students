
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
  students: Student[], sortBy: SortType, order: SortOrder,
): object[] {
  const studentsList = [...students];

  const averageGrade = (array: number[]): number => array
    .reduce((prev, current) => prev + current, 0) / array.length;

  studentsList.sort((first, second) => {
    let a = first;
    let b = second;

    if (order === 'desc') {
      a = second;
      b = first;
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
        return a[sortBy] - b[sortBy];

      case SortType.Married:
        return +a[sortBy] - +b[sortBy];

      case SortType.AverageGrade:
        return averageGrade(a[sortBy]) - averageGrade(b[sortBy]);

      default:
        return 0;
    }
  });

  return studentsList;
}
