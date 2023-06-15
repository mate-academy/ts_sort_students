
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
  AverageGrade = 'grade',
}

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum: number, n: number) => (sum + n), 0) / grades.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const asc = order === 'asc';

  const compareFunction = (a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return asc
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return asc
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      case SortType.AverageGrade:
        return asc
          ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
          : getAverageGrade(b.grades) - getAverageGrade(a.grades);
      default:
        throw new Error('Data can not be sorted');
    }
  };

  return [...students].sort(compareFunction);
}
