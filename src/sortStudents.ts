
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

export function averageGrade(grades: number[]): number {
  return grades
    .reduce((acc: number, current: number) => acc + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])));
      break;
    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((a, b) => (order === 'asc'
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy])));
      break;
    case SortType.AverageGrade:
      studentsCopy.sort((a, b) => (order === 'asc'
        ? averageGrade(a.grades) - averageGrade(b.grades)
        : averageGrade(b.grades) - averageGrade(a.grades)));
      break;
    default:
      throw new Error('Error! Check your input values');
  }

  return studentsCopy;
}
