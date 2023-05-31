
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrades(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArrCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsArrCopy.sort((cur, next) => (
        order === 'asc'
          ? cur[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(cur[sortBy])
      ));

    case SortType.Age:
    case SortType.Married:
      return studentsArrCopy.sort((cur, next) => (
        order === 'asc'
          ? Number(cur[sortBy]) - Number(next[sortBy])
          : Number(next[sortBy]) - Number(cur[sortBy])
      ));

    case SortType.AverageGrade:
      return studentsArrCopy.sort((cur, next) => (
        order === 'asc'
          ? getAverageGrades(cur.grades) - getAverageGrades(next.grades)
          : getAverageGrades(next.grades) - getAverageGrades(cur.grades)
      ));

    default:
      throw new Error('Unknown sort type');
  }
}
