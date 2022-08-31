
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
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverage(grades: number[]): number {
  return grades.reduce((sum, value) => sum + value) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyOfStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyOfStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyOfStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyOfStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyOfStudents.sort(
          (a, b) => calculateAverage(a[sortBy]) - calculateAverage(b[sortBy]),
        )
        : copyOfStudents.sort(
          (a, b) => calculateAverage(b[sortBy]) - calculateAverage(a[sortBy]),
        );

    default:
      throw new Error('Error');
  }
}
