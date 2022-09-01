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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];
  const averageValue = (
    grades: number[],
  ): number => grades
    .reduce((sum: number, num: number) => sum + num, 0) / grades.length;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => +a[sortBy] - +b[sortBy])
        : studentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy]);
    case SortType.AverageGrade:
      return (order === 'asc')
        ? studentsCopy.sort(
          (a, b) => averageValue(a.grades) - averageValue(b.grades),
        )
        : studentsCopy.sort(
          (a, b) => averageValue(b.grades) - averageValue(a.grades),
        );
    default:
  }

  return studentsCopy;
}
