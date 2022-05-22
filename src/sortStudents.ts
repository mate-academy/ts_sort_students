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

export function sortStudents(students: Student[], sortBy:
SortType, order: SortOrder): Student[] {
  const copyArrOfStudents = [...students];

  function everageGrade(grades: number[]): number {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  }

  copyArrOfStudents.sort((a:Student, b:Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : a[sortBy].localeCompare(b[sortBy]);
      case SortType.Age:
        return order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      case SortType.AverageGrade:
        return order === 'asc'
          ? everageGrade(a[sortBy]) - everageGrade(b[sortBy])
          : everageGrade(b[sortBy]) - everageGrade(a[sortBy]);

      default:
        return 0;
    }
  });

  return copyArrOfStudents;
}
