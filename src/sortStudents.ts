export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
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
  const resultStudents: Student[] = JSON.parse(JSON.stringify(students));

  const averageMark = (grades: number[]): number => grades
    .reduce((a, b) => a + b, 0) / grades.length;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? resultStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : resultStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? resultStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : resultStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? resultStudents
          .sort((a, b) => averageMark(a[sortBy]) - averageMark(b[sortBy]))
        : resultStudents
          .sort((a, b) => averageMark(b[sortBy]) - averageMark(a[sortBy]));
    default:
      return resultStudents;
  }
}
