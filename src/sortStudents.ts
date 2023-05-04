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
  AverageGrade = 'avarageGrade',
}

export type SortOrder = 'asc' | 'desc';

const avarageGrade = (grades: number[]): number => {
  return grades.reduce((x, y) => x + y) / grades.length || 1;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'desc'
        ? studentCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
        : studentCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    case SortType.Married:
    case SortType.Age:
      return order === 'desc'
        ? studentCopy.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]))
        : studentCopy.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentCopy.sort(
          (a, b) => avarageGrade(a.grades) - avarageGrade(b.grades),
        )
        : studentCopy.sort(
          (b, a) => avarageGrade(a.grades) - avarageGrade(b.grades),
        );
    default:
      throw new Error('Invalid input');
  }
}
