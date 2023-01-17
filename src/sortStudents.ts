
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
export type SortOrder = 'asc' | 'dsc';


export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder
  ) {
  const sorted = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
       ? sorted.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
       : sorted.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? sorted.sort((a, b) => +a[sortBy] - +b[sortBy])
        : sorted.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? sorted.sort((a, b) => getAverageGrade(a[sortBy])
          - getAverageGrade(b[sortBy]))
        : sorted.sort((a, b) => getAverageGrade(b[sortBy])
          - getAverageGrade(a[sortBy]));
  }
}

function getAverageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}
