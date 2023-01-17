export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAvgGrade = (grades: number[]): number => {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copiedStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copiedStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copiedStudents.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : copiedStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? copiedStudents
          .sort((a, b) => getAvgGrade(a.grades) - getAvgGrade(b.grades))
        : copiedStudents
          .sort((a, b) => getAvgGrade(b.grades) - getAvgGrade(a.grades));

    default:
      return [];
  }
}
