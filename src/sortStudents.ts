
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(students: Student): number {
  const sum = students.grades.reduce((a, b) => a + b, 0);
  const result = sum / students.grades.length;

  return result;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(a) - getAverageGrade(b)
          : getAverageGrade(b) - getAverageGrade(a);

      default:
        throw new Error('Error');
    }
  });
}
