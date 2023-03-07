
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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  return students.sort((activeStudent: Student, nextStudent: Student) => {
    const activeAverageGrade = activeStudent[SortType.AverageGrade]
      .reduce((a, b) => a + b)
    / activeStudent[SortType.AverageGrade].length;
    const nextAverageGrade = nextStudent[SortType.AverageGrade]
      .reduce((a, b) => a + b)
    / nextStudent[SortType.AverageGrade].length;

    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? activeStudent[SortType.Name]
            .localeCompare(nextStudent[SortType.Name])
          : nextStudent[SortType.Name]
            .localeCompare(activeStudent[SortType.Name]);

      case SortType.Surname:
        return order === 'asc'
          ? activeStudent[SortType.Surname]
            .localeCompare(nextStudent[SortType.Surname])
          : nextStudent[SortType.Surname]
            .localeCompare(activeStudent[SortType.Surname]);

      case SortType.Age:
        return order === 'asc'
          ? activeStudent[SortType.Age] - nextStudent[SortType.Age]
          : nextStudent[SortType.Age] - activeStudent[SortType.Age];

      case SortType.Married:
        if (activeStudent[SortType.Married]
          === nextStudent[SortType.Married]
          && order === 'asc') {
          return 0;
        }

        if (nextStudent[SortType.Married]
          === activeStudent[SortType.Married]
          && order === 'desc') {
          return 0;
        }

        if (activeStudent[SortType.Married]
          && !nextStudent[SortType.Married]
          && order === 'asc') {
          return 1;
        }

        if (nextStudent[SortType.Married]
          && !activeStudent[SortType.Married]
          && order === 'desc') {
          return 1;
        }

        return -1;

      case SortType.AverageGrade:
        return order === 'asc'
          ? activeAverageGrade - nextAverageGrade
          : nextAverageGrade - activeAverageGrade;

      default:
        return 0;
    }
  });
}
