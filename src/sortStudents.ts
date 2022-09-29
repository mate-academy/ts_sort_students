
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  function sumAverageGrade(numbers: number[]): number {
    return numbers.reduce((sum, number) => sum + number) / numbers.length;
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
        ? newStudents.sort((a, b) => (sumAverageGrade(a[sortBy]))
         - (sumAverageGrade(b[sortBy])))
        : newStudents.sort((a, b) => (sumAverageGrade(b[sortBy]))
        - (sumAverageGrade(a[sortBy])));
    default: break;
  }

  return newStudents;
}
