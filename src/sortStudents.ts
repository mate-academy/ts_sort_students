
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

function countAverage(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copiedStudents
        .sort((studentA, studentB) => (
          order === 'asc'
            ? studentA[sortBy].localeCompare(studentB[sortBy])
            : studentB[sortBy].localeCompare(studentA[sortBy])
        ));

    case SortType.Age:
    case SortType.Married:
      return copiedStudents
        .sort((studentA, studentB) => (
          order === 'asc'
            ? Number(studentA[sortBy]) - Number(studentB[sortBy])
            : Number(studentB[sortBy]) - Number(studentA[sortBy])
        ));

    case SortType.AverageGrade:
      return copiedStudents
        .sort((studentA, studentB) => (
          order === 'asc'
            ? countAverage(studentA[sortBy]) - countAverage(studentB[sortBy])
            : countAverage(studentB[sortBy]) - countAverage(studentA[sortBy])
        ));

    default:
      throw new Error('Error. Check your input data types.');
  }
}
