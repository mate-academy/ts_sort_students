
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(arr: number[]): number {
  return arr.reduce((a: number, b: number) => a + b) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
) : Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy
          .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCopy
          .sort((a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy
          .sort((a: Student, b: Student) => +a[sortBy] - +b[sortBy])
        : studentsCopy
          .sort((a: Student, b: Student) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy
          .sort((a: Student, b: Student) => getAverage(a.grades)
          - getAverage(b.grades))
        : studentsCopy
          .sort((a: Student, b: Student) => getAverage(b.grades)
          - getAverage(a.grades));
    default:
      break;
  }

  return studentsCopy;
}
