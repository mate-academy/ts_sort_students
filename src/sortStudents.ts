
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(array: number[]): number {
  return array.reduce((sum, element) => sum + element, 0) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? copiedArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copiedArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
      return (order === 'asc')
        ? copiedArray.sort((a, b) => a[sortBy] - b[sortBy])
        : copiedArray.sort((a, b) => b[sortBy] - a[sortBy]);

    case SortType.Married:
      return (order === 'asc')
        ? copiedArray.sort((a: Student, b: Student) => +a.married - +b.married)
        : copiedArray.sort((a: Student, b: Student) => +b.married - +a.married);

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copiedArray
          .sort((a, b) => getAverage(a[sortBy]) - getAverage(b[sortBy]))
        : copiedArray
          .sort((a, b) => getAverage(b[sortBy]) - getAverage(a[sortBy]));

    default: Error('Error?');
  }

  return students;
}
