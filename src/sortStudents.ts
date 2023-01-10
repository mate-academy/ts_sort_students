
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

function getAverageGrades({ grades }: Student): number {
  return grades.reduce((sum, grade) => sum + grade)
    / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const orderModifier: 1 | -1 = order === 'asc' ? 1 : -1;

  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]) * orderModifier;
      case SortType.Age:
      case SortType.Married:
        return (+a[sortBy] - +b[sortBy]) * orderModifier;
      case SortType.AverageGrade:
        return (getAverageGrades(a) - getAverageGrades(b)) * orderModifier;
      default:
        throw new Error('Incorrect parameter name');
    }
  });
}
