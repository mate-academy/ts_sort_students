
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = [...students];

  function avGrade(grades: number[]): number {
    const totalGrades: number = grades
      .reduce((prev, curr) => (prev + curr));

    return totalGrades / grades.length;
  }

  copyOfStudents.sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return order === 'desc'
          ? +b[sortBy] - +a[sortBy]
          : +a[sortBy] - +b[sortBy];
      default:
        return order === 'desc'
          ? avGrade(b.grades) - avGrade(a.grades)
          : avGrade(a.grades) - avGrade(b.grades);
    }
  });

  return copyOfStudents;
}
