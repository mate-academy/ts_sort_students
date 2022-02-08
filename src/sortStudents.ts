export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desk';

function averegeGrade(grades: number[]): number {
  return grades.reduce((acumulator, value) => acumulator + value, 0)
  / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students].sort((firstStudent, secondStudent) => {
    const a = order === 'asc'
      ? firstStudent
      : secondStudent;

    const b = order === 'asc'
      ? secondStudent
      : firstStudent;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return +a[sortBy] - +b[sortBy];

      case SortType.AverageGrade:
        return averegeGrade(a[sortBy]) - averegeGrade(b[sortBy]);

      default:
        return 0;
    }
  });

  return sortedStudents;
}
