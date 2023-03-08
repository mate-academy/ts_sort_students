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

function getAverage(studentGrades: number[]): number {
  return studentGrades.reduce((sum: number, curr: number) => (
    sum + curr
  ), 0) / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];

  return copyOfStudents.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return studentA[sortBy].localeCompare(studentB[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(studentA[sortBy]) - getAverage(studentB[sortBy])
          : getAverage(studentB[sortBy]) - getAverage(studentA[sortBy]);

      default:
        return 0;
    }
  });
}
