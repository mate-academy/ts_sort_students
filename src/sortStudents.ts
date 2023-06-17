function getAvgGrade(grades: number[]): number {
  return (grades
    .reduce((sum, currentValue) => sum + currentValue, 0)) / grades.length;
}

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
): Student[] {
  const copyStudents = [...students];
  const isDesc = order === 'desc';

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return isDesc
        ? copyStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
        : copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return isDesc
        ? copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy])
        : copyStudents.sort((a, b) => +a[sortBy] - +b[sortBy]);
    case SortType.AverageGrade:
      return isDesc
        ? copyStudents
          .sort((a, b) => getAvgGrade(b.grades) - getAvgGrade(a.grades))
        : copyStudents
          .sort((a, b) => getAvgGrade(a.grades) - getAvgGrade(b.grades));
    default:
      return copyStudents;
  }
}
