function averageGrade(grades: number[]): number {
  return grades.reduce((acc: number, grade: number) => acc + grade, 0)
    / grades.length;
}

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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyStudents.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : copyStudents.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        // eslint-disable-next-line max-len
        ? copyStudents.sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]))
        // eslint-disable-next-line max-len
        : copyStudents.sort((a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        // eslint-disable-next-line max-len
        ? copyStudents.sort((a: Student, b: Student) => averageGrade(a[sortBy]) - averageGrade(b[sortBy]))
        // eslint-disable-next-line max-len
        : copyStudents.sort((a: Student, b: Student) => averageGrade(b[sortBy]) - averageGrade(a[sortBy]));

    default:
      throw new Error('Sort is impossible');
  }
}
