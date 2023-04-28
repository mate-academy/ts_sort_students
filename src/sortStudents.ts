
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(grades: number[]): number {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  const sortedArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedArray.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:
      sortedArray.sort((a, b) => (order === 'asc'
        ? +a[sortBy] - +(b[sortBy])
        : +b[sortBy] - +(a[sortBy])
      ));
      break;

    case SortType.AverageGrade:
      sortedArray.sort((a, b) => (order === 'asc'
        ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
        : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy])
      ));
      break;

    default:
      break;
  }

  return sortedArray;
}
