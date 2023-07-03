
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

function getAverageGrade(grades: number[]): number {
  return (grades.reduce((sum: number, n: number) => sum + n, 0))
    / grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
)
  : Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
          : getAverageGrade(b.grades) - getAverageGrade(a.grades);

      case SortType.Age:
        return order === 'asc'
          ? Number(a.age) - Number(b.age)
          : Number(b.age) - Number(a.age);

      case SortType.Married:
        return order === 'asc'
          ? +(a[sortBy]) - +(b[sortBy])
          : +(b[sortBy]) - +(a[sortBy]);
      default:
        return order === 'asc'
          ? String(a[sortBy]).localeCompare(String(b[sortBy]))
          : String(a[sortBy]).localeCompare(String(b[sortBy]));
    }
  });
}
