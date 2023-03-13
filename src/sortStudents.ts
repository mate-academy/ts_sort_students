
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

function getAverageAge({ grades }: Student): number {
  return grades
    ? grades.reduce((a, b) => a + b) / grades.length
    : 0;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  return [...students].sort((activeStudent: Student, nextStudent: Student) => {
    const sortMethod = (order === 'asc')
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return activeStudent[sortBy]
          .localeCompare(nextStudent[sortBy]) * sortMethod;

      case SortType.Age:
      case SortType.Married:
        return (+activeStudent[sortBy] - +nextStudent[sortBy]) * sortMethod;

      case SortType.AverageGrade:
        return (getAverageAge(activeStudent)
         - getAverageAge(nextStudent)) * sortMethod;

      default:
        throw new Error(`Invalid SortType: ${sortBy}.`);
    }
  });
}
