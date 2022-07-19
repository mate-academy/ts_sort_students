
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
): Student[] {
  const copy = [...students];

  const average = (numArr: number[]): number => numArr.reduce(
    (sum: number, el: number) => sum + el, 0,
  ) / numArr.length;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }

      if (order === 'desc') {
        return copy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      }
      break;

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return copy.sort((a, b) => +a[sortBy] - +b[sortBy]);
      }

      if (order === 'desc') {
        return copy.sort((a, b) => +b[sortBy] - +a[sortBy]);
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        return copy.sort((a, b) => average(a.grades) - average(b.grades));
      }

      if (order === 'desc') {
        return copy.sort((a, b) => average(b.grades) - average(a.grades));
      }
      break;

    default:
      return students;
  }

  return students;
}
