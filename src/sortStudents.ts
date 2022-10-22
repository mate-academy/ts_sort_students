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
// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAverageGrade = (item: number[]): number => item
  .reduce((sum: number, element: number) => sum + element, 0) / item.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents
          .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]))
        : copyStudents
          .sort((a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyStudents
          .sort((a:Student, b:Student) => +a[sortBy] - +b[sortBy])
        : copyStudents
          .sort((a:Student, b:Student) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents
          .sort((a: Student, b: Student) => (
            getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
          ))
        : copyStudents
          .sort((a: Student, b: Student) => (
            getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy])
          ));

    default:
      return [];
  }
}
