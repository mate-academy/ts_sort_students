
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];
  let orderr = 1;

  if (order === 'desc') {
    orderr = -1;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      result
        .sort((a: Student, b: Student): number => {
          return orderr * a[sortBy].localeCompare(b[sortBy]);
        });
      break;

    case SortType.Age:
    case SortType.Married:
      result
        .sort((a: Student, b: Student): number => {
          return orderr * (+a[sortBy] - +b[sortBy]);
        });
      break;

    case SortType.AverageGrade:
      result.sort((a: Student, b:Student): number => {
        const aAverageGrade = a.grades
          .reduce((sum: number, next: number): number => sum + next)
          / a.grades.length;

        const bAverageGrade = b.grades
          .reduce((sum: number, next: number): number => sum + next)
          / b.grades.length;

        return orderr * (aAverageGrade - bAverageGrade);
      });
      break;

    default:
      throw new Error('unexpected sort Type in sortStudents Function');
  }

  return result;
}
