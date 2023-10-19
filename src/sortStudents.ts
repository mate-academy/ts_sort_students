
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  function getAverage(studentGrades: number[]): number {
    return studentGrades.reduce((accum: number, current: number) => (
      accum + current
    ), 0) / studentGrades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? newStudents.sort((a, b) => (a[sortBy].localeCompare(b[sortBy])))
        : newStudents.sort((a, b) => (b[sortBy].localeCompare(a[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? newStudents.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : newStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? newStudents.sort((a, b) => (getAverage(a[sortBy]))
         - (getAverage(b[sortBy])))
        : newStudents.sort((a, b) => (getAverage(b[sortBy]))
        - (getAverage(a[sortBy])));
    default: break;
  }

  return newStudents;
}
