export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: null[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));
      break;
    case SortType.Married:
    case SortType.Age:
      sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;
    case SortType.AverageGrade:
      sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? calculateAverageGrade(a[sortBy]) - calculateAverageGrade(b[sortBy])
          : calculateAverageGrade(b[sortBy]) - calculateAverageGrade(a[sortBy]);
      });
      break;
    default:
      break;
  }

  return sortedStudents;
}
