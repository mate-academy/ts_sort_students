
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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const result: Student[] = [...students];

  function averageGrade(grades: number[]): number {
    return grades.reduce((sum, current) => sum + current, 0)
      / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? result.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : result.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? result.sort((a, b) => +a[sortBy] - +b[sortBy])
        : result.sort((a, b) => +b[sortBy] - +a[sortBy]);

    default:
      return order === 'asc'
        ? result.sort((a, b) => averageGrade(a[sortBy])
        - averageGrade(b[sortBy]))
        : result.sort((a, b) => averageGrade(b[sortBy])
          - averageGrade(a[sortBy]));
  }
}
