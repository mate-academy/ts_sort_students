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

function calculateAverageGrade(grades: number[]): number {
  const sum = grades.reduce((total, grade) => total + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const ascending = order === 'asc';

  function sorting(a: Student, b: Student): number {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (ascending ? 1 : -1) * a[sortBy].localeCompare(b[sortBy]);

      case SortType.AverageGrade:
        return (ascending ? 1 : -1)
          * (calculateAverageGrade(a.grades) - calculateAverageGrade(b.grades));

      case SortType.Age:
      case SortType.Married:
        return (ascending ? 1 : -1) * (+a[sortBy] - +b[sortBy]);

      default:
        return 0;
    }
  }

  const sortedStudents = [...students].sort(sorting);

  return sortedStudents;
}
