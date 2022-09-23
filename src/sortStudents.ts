
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
):Student[] {
  const copyStudents = [...students];

  function culcAverageGrade(grades: number[]): number {
    return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents.sort((a, b) => culcAverageGrade(a[sortBy])
        - culcAverageGrade(b[sortBy]))
        : copyStudents.sort((a, b) => culcAverageGrade(b[sortBy])
        - culcAverageGrade(a[sortBy]));

    case SortType.Married:
    case SortType.Age:
      return order === 'asc'
        ? copyStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    default:
      return copyStudents;
  }
}
