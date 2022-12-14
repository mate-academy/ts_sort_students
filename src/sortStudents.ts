
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

export type SortOrder = 'asc' | 'desc';

function getAverage(grades: number[]): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((a: Student, b: Student) => {
      switch (sortBy) {
        case SortType.Married:
          return Number(b[sortBy]) - Number(a[sortBy]);

        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy]);

        case SortType.Age:
          return order === 'asc'
            ? a[sortBy] - b[sortBy]
            : b[sortBy] - a[sortBy];

        case SortType.AverageGrade:
          return order === 'asc'
            ? getAverage(a[sortBy]) - getAverage(b[sortBy])
            : getAverage(b[sortBy]) - getAverage(a[sortBy]);

        default:
          return 0;
      }
    });
}
