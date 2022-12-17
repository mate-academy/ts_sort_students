
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

function countMarks(grades:number[]):number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const sortedStudents:Student[] = [...students];

  switch (sortBy) {
    case
      SortType.Name:
      if (order === 'asc') {
        return sortedStudents.sort((a, b) => (
          a[sortBy].localeCompare(b[sortBy])));
      }

      return sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Surname:
      if (order === 'asc') {
        return sortedStudents.sort((a, b) => (
          a[sortBy].localeCompare(b[sortBy])));
      }

      return sortedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
      if (order === 'asc') {
        return sortedStudents.sort((a, b) => a[sortBy] - b[sortBy]);
      }

      return sortedStudents.sort((a, b) => b[sortBy] - a[sortBy]);

    case SortType.Married:
      if (order === 'asc') {
        return sortedStudents.sort((a, b) => a[sortBy] - b[sortBy]);
      }

      return sortedStudents.sort((a, b) => b[sortBy] - a[sortBy]);

    case SortType.AverageGrade:
      if (order === 'asc') {
        return sortedStudents.sort((a, b) => (
          countMarks(a[sortBy]) - countMarks(b[sortBy])));
      }

      return sortedStudents.sort((a, b) => (
        countMarks(b[sortBy]) - countMarks(a[sortBy])));

    default:
      break;
  }

  return sortedStudents;
}
