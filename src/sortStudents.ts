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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce(
    (acc: number, grade: number) => acc + grade, 0,
  ) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  function sortCallback(a: Student, b: Student): number {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (a[sortBy] as number) - (b[sortBy] as number);

      case SortType.AverageGrade:
        return getAverageGrade(a.grades) - getAverageGrade(b.grades);

      default:
        return 0;
    }
  }

  sortedStudents.sort((a, b) => {
    const comparison = sortCallback(a, b);

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}
