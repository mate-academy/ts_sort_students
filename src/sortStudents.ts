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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  return grades
    .reduce((sum, cur) => sum + cur, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  return sortedStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.AverageGrade:
        return order === 'asc'
          ? averageGrade(a.grades) - averageGrade(b.grades)
          : averageGrade(b.grades) - averageGrade(a.grades);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      default:
        throw new Error(`${sortBy} is unexpected for sorting`);
    }
  });
}
