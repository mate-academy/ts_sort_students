
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

export type SortOrder = 'asc' | 'desc';

function getAvgMark(marks: number[]): number {
  return marks.reduce((sum, point) => sum + point, 0) / marks.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  return studentsCopy.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +studentA[sortBy] - +studentB[sortBy]
          : +studentB[sortBy] - +studentA[sortBy];

      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAvgMark(studentA[sortBy]) - getAvgMark(studentB[sortBy])
          : getAvgMark(studentB[sortBy]) - getAvgMark(studentA[sortBy]);
      default:
        return studentsCopy;
    }
  });
}
