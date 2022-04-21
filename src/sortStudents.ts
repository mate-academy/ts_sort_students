
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  // write your function
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return [...students].sort((a, b) => {
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
      return [...students].sort((a, b) => {
        return (order === 'asc')
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      });

    case SortType.Married:
      return [...students].sort((a, b) => {
        if (a[sortBy] && b[sortBy]) {
          return 0;
        }

        if (a[sortBy]) {
          return -1;
        }

        if (!a[sortBy]) {
          return 1;
        }

        return null;
      });

    case SortType.AverageGrade:
      return [...students].sort((a, b) => {
        const sumA = a.grades.reduce((sum, n) => sum + n, 0) / a.grades.length;
        const sumB = b.grades.reduce((sum, n) => sum + n, 0) / b.grades.length;

        return (order === 'asc')
          ? sumA - sumB
          : sumB - sumA;
      });

    default:
      return null;
  }
}
