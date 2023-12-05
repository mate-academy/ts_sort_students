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

function averageGradeCount(grades: number[]): number {
  return grades.reduce((a, b) => a + b) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => {
          return a[sortBy].localeCompare(b[sortBy]);
        })
        : studentsCopy.sort((a, b) => {
          return b[sortBy].localeCompare(a[sortBy]);
        });

    case SortType.Married:
    case SortType.Age:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => +a[sortBy] - +b[sortBy])
        : studentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((a, b) => averageGradeCount(a[sortBy])
          - averageGradeCount(b[sortBy]))
        : studentsCopy.sort((a, b) => averageGradeCount(b[sortBy])
          - averageGradeCount(a[sortBy]));

    default:
      return studentsCopy;
  }
}
