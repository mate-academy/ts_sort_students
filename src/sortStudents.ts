
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

function getAverageGrade({ grades }: Student): number {
  return grades.reduce((sum, grade) => sum + grade) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copiedStudents: Student[] = [...students];

  return copiedStudents.sort((a, b) => {
    switch (sortBy) {
      case (SortType.Name):
      case (SortType.Surname):
        if (order === 'desc') {
          return b[sortBy].localeCompare(a[sortBy]);
        }

        return a[sortBy].localeCompare(b[sortBy]);

      case (SortType.Age):
      case (SortType.Married):
        if (order === 'desc') {
          return +b[sortBy] - +a[sortBy];
        }

        return +a[sortBy] - +b[sortBy];

      case (SortType.AverageGrade):
        if (order === 'desc') {
          return getAverageGrade(b) - getAverageGrade(a);
        }

        return getAverageGrade(a) - getAverageGrade(b);

      default:
        throw new Error('Error! Invalid arguments');
    }
  });
}
