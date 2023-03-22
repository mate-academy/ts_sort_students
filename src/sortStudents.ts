
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

function getAverageGrade(array: number[]): number {
  const result = array.reduce((sum, n) => sum + n, 0);

  return result / array.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));
      break;
    case SortType.Age:
    case SortType.Married:
      copyStudents.sort((a, b) => (order === 'asc'
        ? (+a[sortBy]) - (+b[sortBy])
        : (+b[sortBy]) - (+a[sortBy])
      ));
      break;
    case SortType.AverageGrade:
      copyStudents.sort((a, b) => (order === 'asc'
        ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
        : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy])
      ));
      break;
    default:
      break;
  }

  return copyStudents;
}
