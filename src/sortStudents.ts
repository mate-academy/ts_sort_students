
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

const gradeAverage = (arr: number[]): number => arr
  .reduce((a: number, b: number) => a + b, 0) / arr.length;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:

      result.sort((a, b) => (
        order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:

      result.sort((a, b) => (
        order === 'asc'
          ? +a[sortBy] - (+b[sortBy])
          : +b[sortBy] - (+a[sortBy])
      ));
      break;

    case SortType.AverageGrade:

      result.sort((a, b) => (
        order === 'asc'
          ? gradeAverage(a.grades) - gradeAverage(b.grades)
          : gradeAverage(b.grades) - gradeAverage(a.grades)
      ));
      break;

    default:
  }

  return result;
}
