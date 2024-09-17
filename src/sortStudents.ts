
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

function getAverage(grades: number[]): number {
  const gradesSum = grades.reduce((a, b) => a + b, 0);

  return gradesSum / grades.length;
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
      return studentsCopy.sort((studentA, studentB) => (
        order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort((studentA, studentB) => (
        order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy])
      ));

    case SortType.AverageGrade:
      return studentsCopy.sort((studentA, studentB) => (
        order === 'asc'
          ? getAverage(studentA[sortBy]) - getAverage(studentB[sortBy])
          : getAverage(studentB[sortBy]) - getAverage(studentA[sortBy])
      ));

    default:
      return studentsCopy;
  }
}
