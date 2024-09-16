
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
  AverageGrade = 'avgGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  function findAverage(grades: number[]): number {
    return grades
      .reduce((sum, currentGrade) => sum + currentGrade) / grades.length;
  }

  const sortOrder = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((a, b) => {
        return sortOrder * (a[sortBy].localeCompare(b[sortBy]));
      });
      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents.sort((a, b) => {
        return sortOrder * (+a[sortBy] - +b[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents
          .sort((a, b) => findAverage(a.grades) - findAverage(b.grades))
        : copyStudents
          .sort((a, b) => findAverage(b.grades) - findAverage(a.grades));
    default:
      break;
  }

  return copyStudents;
}
