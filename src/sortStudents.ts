
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
      case SortType.Surname:
        return order === 'asc'
          ? activeStudent[sortBy]
            .localeCompare(nextStudent[sortBy])
          : activeStudent[sortBy]
            .localeCompare(nextStudent[sortBy]) * (-1);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +activeStudent[sortBy] - +nextStudent[sortBy]
          : (+activeStudent[sortBy] - +nextStudent[sortBy]) * (-1);

      case SortType.AverageGrade:
        return order === 'asc'
          ? activeAverageGrade - nextAverageGrade
          : (activeAverageGrade - nextAverageGrade) * (-1);

      default:
        throw new Error(`Invalid SortType: ${sortBy}.`);
    }
  });
}
