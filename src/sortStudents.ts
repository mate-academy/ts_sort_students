export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

function getAverageGrade(grades: number[]): number {
  const sum = grades.reduce((total, grade) => total + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];
  const sortOrder: number = order === 'asc' ? 1 : -1;

  return sortedStudents.sort((a, b): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]) * sortOrder;

      case SortType.Age:
      case SortType.Married:
        return (+a[sortBy] - +b[sortBy]) * sortOrder;

      case SortType.AverageGrade:
        return (
          getAverageGrade(a.grades) - getAverageGrade(b.grades)
        ) * sortOrder;

      default:
        return 0;
    }
  });
}
