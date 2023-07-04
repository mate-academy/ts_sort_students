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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(grades: number[]): number {
  return (grades.reduce((sum: number, n: number) => sum + n, 0)
  / grades.length);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function

  const StudentsCopy = [...students];

  switch (sortBy) {
    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? StudentsCopy.sort((a, b) => +a[sortBy] + +b[sortBy])
        : StudentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? StudentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : StudentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.AverageGrade:
      return (order === 'asc')
        ? StudentsCopy.sort(
          (a, b) => getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy]),
        )
        : StudentsCopy.sort(
          (a, b) => getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]),
        );

    default:
      break;
  }

  return StudentsCopy;
}
