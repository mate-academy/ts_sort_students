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
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  const average = (grades: number[]): number => grades
    .reduce((x, y) => x + y) / grades.length;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copy.sort((x, y) => Number(x[sortBy]) - Number(y[sortBy]))
        : copy.sort((x, y) => Number(y[sortBy]) - Number(x[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((x, y) => average(x.grades) - average(y.grades))
        : copy.sort((x, y) => average(y.grades) - average(x.grades));

    default:
      return students;
  }
}
