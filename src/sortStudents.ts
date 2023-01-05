export interface Student {
  // describe Student interface
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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  return grades.reduce((sum, gr) => sum + gr, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);
      case SortType.Age:
        return (order === 'asc')
          ? a.age - b.age
          : b.age - a.age;
      case SortType.Married:
        return (order === 'asc')
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      case SortType.AverageGrade:
        return (order === 'asc')
          ? averageGrade(a.grades) - averageGrade(b.grades)
          : averageGrade(b.grades) - averageGrade(a.grades);
      default:
        return 0;
    }
  });

  return sortedStudents;
}
