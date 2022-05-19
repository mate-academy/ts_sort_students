
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
  const copy:Student[] = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      return order === 'asc'
        ? copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case 'grades':
      return order === 'asc'
        ? copy
          .sort((a, b) => a[sortBy]
            .reduce((x: number, y: number) => x + y, 0) / a[sortBy].length
            - b[sortBy]
              .reduce((x: number, y: number) => x + y, 0) / b[sortBy].length)
        : copy
          .sort((a, b) => b[sortBy]
            .reduce((x: number, y: number) => x + y, 0) / b[sortBy].length
            - a[sortBy]
              .reduce((x: number, y: number) => x + y, 0) / a[sortBy].length);

    default:
      return order === 'asc'
        ? copy.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copy.sort((a, b) => +b[sortBy] - +a[sortBy]);
  }
}
