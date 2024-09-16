
export interface Student {
  name: string;
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

export function
sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copy = (order === 'asc')
        ? copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

      return copy;

    case SortType.Age:
    case SortType.Married:
      copy = (order === 'asc')
        ? copy.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copy.sort((a, b) => +b[sortBy] - +a[sortBy]);

      return copy;

    case SortType.AverageGrade:
      copy = (order === 'asc')
        ? copy.sort((a, b) => (a[sortBy].reduce((sum, x) => sum + x)
        / a[sortBy].length)
        - (b[sortBy].reduce((sum, x) => sum + x) / b[sortBy].length))
        : copy.sort((a, b) => (b[sortBy].reduce((sum, x) => sum + x)
        / b[sortBy].length)
        - (a[sortBy].reduce((sum, x) => sum + x) / a[sortBy].length));

      return copy;

    default:
      return copy;
  }
}
