
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | string {
  const inputCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? inputCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : inputCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? inputCopy.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : inputCopy.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
    case SortType.AverageGrade:
      return order === 'asc'
        ? inputCopy.sort(
          (a, b) => getAverageGrade(a.grades) - getAverageGrade(b.grades),
        )
        : inputCopy.sort(
          (a, b) => getAverageGrade(b.grades) - getAverageGrade(a.grades),
        );
    default:
      return 'invalid input';
  }
}
