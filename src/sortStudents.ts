
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
  AverageGrade = 'averagegrade',
}

export type SortOrder = 'asc' | 'desc';

function getAvGrade(grades: number[]): number {
  return grades.reduce((sum, element) => sum + element, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const classroom = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? classroom.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : classroom.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? classroom.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : classroom.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? classroom.sort((a, b) => getAvGrade(a.grades) - getAvGrade(b.grades))
        : classroom.sort((a, b) => getAvGrade(b.grades) - getAvGrade(a.grades));

    default:
      throw new Error('sort type not supported');
  }
}
