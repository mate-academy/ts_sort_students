
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
  AverageGrade = 'grades'
}

const averGrades = (grades: number[]): number => {
  return grades.reduce((prev, curr) => prev + curr, 0) / grades.length;
};

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedSturents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedSturents.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return sortedSturents.sort((a, b) => (order === 'asc'
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy])));

    case SortType.AverageGrade:
      return sortedSturents.sort((a, b) => (order === 'asc'
        ? averGrades(a[sortBy]) - averGrades(b[sortBy])
        : averGrades(b[sortBy]) - averGrades(a[sortBy])));

    default: break;
  }

  return sortedSturents;
}
