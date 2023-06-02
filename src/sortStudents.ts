
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

function averageGradeCulc(grades: number[]): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / (grades.length || 1);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const iAmSorted = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? iAmSorted.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : iAmSorted.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Married:
    case SortType.Age:
      return order === 'asc'
        ? iAmSorted.sort((a, b) => +a[sortBy] - +b[sortBy])
        : iAmSorted.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? iAmSorted.sort((a, b) => averageGradeCulc(a[sortBy])
          - averageGradeCulc(b[sortBy]))
        : iAmSorted.sort((a, b) => averageGradeCulc(b[sortBy])
          - averageGradeCulc(a[sortBy]));

    default:
      return iAmSorted;
  }
}
