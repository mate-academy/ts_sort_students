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

export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  return grades.reduce((sum, numb) => sum + numb) / grades.length;
}

// eslint-disable-next-line max-len
export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  if (order === 'asc') {
    switch (sortBy) {
      case 'name':
      case 'surname':
        return [...students].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

      case 'grades':
        // eslint-disable-next-line max-len
        return [...students].sort((a, b) => averageGrade(a[sortBy]) - averageGrade(b[sortBy]));

      default:
        return [...students].sort((a, b) => +a[sortBy] - +b[sortBy]);
    }
  }

  switch (sortBy) {
    case 'name':
    case 'surname':
      return [...students].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case 'grades':
      // eslint-disable-next-line max-len
      return [...students].sort((a, b) => averageGrade(b[sortBy]) - averageGrade(a[sortBy]));

    default:
      return [...students].sort((a, b) => +b[sortBy] - +a[sortBy]);
  }
}
