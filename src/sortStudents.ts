export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const sortedStudents = [...students];

  switch (order) {
    case 'asc':
      if (sortBy === SortType.AverageGrade) {
        sortedStudents
          .sort((a, b) => a.grades
            .reduce((sum, cur) => sum + cur, 0) / a.grades.length
            - b.grades.reduce((sum, cur) => sum + cur, 0) / b.grades.length);
      }

      if (sortBy === SortType.Age || sortBy === SortType.Married) {
        sortedStudents.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));
      }

      if (sortBy === SortType.Name || sortBy === SortType.Surname) {
        sortedStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      }
      break;

    case 'desc':
      if (sortBy === SortType.AverageGrade) {
        sortedStudents
          .sort((a, b) => b.grades
            .reduce((sum, cur) => sum + cur, 0) / b.grades.length
            - a.grades.reduce((sum, cur) => sum + cur, 0) / a.grades.length);
      }

      if (sortBy === SortType.Age || sortBy === SortType.Married) {
        sortedStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
      }

      if (sortBy === SortType.Name || sortBy === SortType.Surname) {
        sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      }

      break;

    default:
      break;
  }

  return sortedStudents;
}
