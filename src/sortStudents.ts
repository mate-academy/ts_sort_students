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

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  return [...students].sort((a: Student, b: Student) => {
    let result = 0;
    const aAvg: number = a.grades.reduce(
      (acc: number, prev: number) => acc + prev, 0,
    ) / a.grades.length;
    const bAvg: number = b.grades.reduce(
      (acc: number, prev: number) => acc + prev, 0,
    ) / b.grades.length;

    switch (sortBy) {
      case SortType.Name:
        result = order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
        break;
      case SortType.Surname:
        result = order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
        break;
      case SortType.Age:
        result = order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
        break;
      case SortType.Married:
        result = order === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
        break;
      case SortType.AverageGrade:
        result = order === 'asc'
          ? aAvg - bAvg
          : bAvg - aAvg;
        break;
      default:
        result = 0;
    }

    return result === 0 ? students.indexOf(a) - students.indexOf(b) : result;
  });
}
