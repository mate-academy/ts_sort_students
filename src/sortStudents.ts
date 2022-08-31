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
  const newStudents: Student[] = [...students];

  const average = (numArr: number[]): number => numArr.reduce(
    (sum: number, el: number) => sum + el, 0,
  ) / numArr.length;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? newStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : newStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? newStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : newStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? newStudents.sort((a, b) => average(a.grades) - average(b.grades))
        : newStudents.sort((a, b) => average(b.grades) - average(a.grades));

    default:
      return students;
  }
}
