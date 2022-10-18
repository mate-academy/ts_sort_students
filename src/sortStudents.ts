
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

function getAverage(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
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
        ? studentsCopy.sort((studentA,
          studentB) => studentA[sortBy].localeCompare(studentB[sortBy]))
        : studentsCopy.sort((studentA,
          studentB) => studentB[sortBy].localeCompare(studentA[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort((studentA, studentB) => Number(studentA[sortBy])
          - Number(studentB[sortBy]))
        : studentsCopy.sort((studentA, studentB) => Number(studentB[sortBy])
          - Number(studentA[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((studentA, studentB) => getAverage(studentA[sortBy])
          - getAverage(studentB[sortBy]))
        : studentsCopy.sort((studentA, studentB) => getAverage(studentB[sortBy])
          - getAverage(studentA[sortBy]));
    default:
      return studentsCopy;
  }
}
