
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
  function averageGrades(grades: number[]): number {
    return grades.reduce((x, y) => x + y, 0) / grades.length;
  }

  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        return copyStudents.sort((x, y) => (
          x[sortBy].localeCompare(y[sortBy])));
      }

      return copyStudents.sort((x, y) => y[sortBy].localeCompare(x[sortBy]));

    case SortType.Surname:
      if (order === 'asc') {
        return copyStudents.sort((x, y) => (
          x[sortBy].localeCompare(y[sortBy])));
      }

      return copyStudents.sort((x, y) => y[sortBy].localeCompare(x[sortBy]));

    case SortType.Age:
      if (order === 'asc') {
        return copyStudents.sort((x, y) => x[sortBy] - y[sortBy]);
      }

      return copyStudents.sort((x, y) => y[sortBy] - x[sortBy]);

    case SortType.Married:
      if (order === 'asc') {
        return copyStudents.sort((x, y) => x[sortBy] - y[sortBy]);
      }

      return copyStudents.sort((x, y) => y[sortBy] - x[sortBy]);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return copyStudents.sort((x, y) => (
          averageGrades(x[sortBy]) - averageGrades(y[sortBy])));
      }

      return copyStudents.sort((x, y) => (
        averageGrades(y[sortBy]) - averageGrades(x[sortBy])));

    default:
      break;
  }

  return copyStudents;
}
