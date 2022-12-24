
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

export type SortOrder = 'asc' | 'desc';

const avgGrades = (grades: number[]): number => {
  return grades.reduce((a, b) => a + b) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'desc'
        ? copy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
        : copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'desc'
        ? copy.sort((a, b) => +b[sortBy] - +a[sortBy])
        : copy.sort((a, b) => +a[sortBy] - +b[sortBy]);

    case SortType.AverageGrade:
      return order === 'desc'
        ? copy.sort((a, b) => avgGrades(b[sortBy]) - avgGrades(a[sortBy]))
        : copy.sort((a, b) => avgGrades(a[sortBy]) - avgGrades(b[sortBy]));

    default:
      return copy;
  }
}
