
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

function getAverageMark(grades: number[]): number {
  return grades.reduce((sum, mark) => sum + mark, 0) / grades.length;
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
        ? copyOfStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : copyOfStudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:

      return order === 'asc'
        ? copyOfStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyOfStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:

      return order === 'asc'
        ? copyOfStudents
          .sort((a, b) => getAverageMark(a[sortBy]) - getAverageMark(b[sortBy]))
        : copyOfStudents
          .sort((a, b) => (
            getAverageMark(b[sortBy]) - getAverageMark(a[sortBy])));

    default:
      break;
  }

  return copyOfStudents;
}
