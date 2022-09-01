
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
        ? copyOfStudents.sort(
          (firstStudent, secondStudent) => firstStudent[sortBy]
            .localeCompare(secondStudent[sortBy]),
        )
        : copyOfStudents.sort(
          (firstStudent, secondStudent) => secondStudent[sortBy]
            .localeCompare(firstStudent[sortBy]),
        );

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyOfStudents.sort(
          (firstStudent, secondStudent) => +firstStudent[sortBy]
          - +secondStudent[sortBy],
        )
        : copyOfStudents.sort(
          (firstStudent, secondStudent) => +secondStudent[sortBy]
          - +firstStudent[sortBy],
        );

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyOfStudents.sort(
          (firstStudent, secondStudent) => (
            calculateAverage(firstStudent[sortBy])
            - calculateAverage(secondStudent[sortBy])),
        )
        : copyOfStudents.sort(
          (firstStudent, secondStudent) => (
            calculateAverage(secondStudent[sortBy])
            - calculateAverage(firstStudent[sortBy])),
        );

    default:
      throw new Error('Error');
  }
}
