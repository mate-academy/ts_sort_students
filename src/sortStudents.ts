
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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const averageGrage = (student: Student): number => (
  student.grades.reduce((a, b) => a + b, 0) / student.grades.length
);

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        if (order === 'asc') {
          return +a[sortBy] - +b[sortBy];
        }

        return +b[sortBy] - +a[sortBy];

      case SortType.AverageGrade:
        if (order === 'asc') {
          return averageGrage(a) - averageGrage(b);
        }

        return averageGrage(b) - averageGrage(a);

      default:
        return 0;
    }
  });
}
