
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder):Student[] {
  const studentsCpy: Student[] = [...students];
  const averageGradeArr = (grades: number[]): number => grades
    .reduce((a: number, b: number) => a + b, 0) / grades.length;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? studentsCpy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : studentsCpy.sort((b, a) => a[sortBy].localeCompare(b[sortBy]));
    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? studentsCpy.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : studentsCpy.sort((b, a) => Number(a[sortBy]) - Number(b[sortBy]));
    case SortType.AverageGrade:
      return (order === 'asc')
        ? studentsCpy.sort((a, b) => averageGradeArr(a.grades)
          - averageGradeArr(b.grades))
        : studentsCpy.sort((b, a) => averageGradeArr(a.grades)
          - averageGradeArr(b.grades));
    default:
  }

  return studentsCpy;
}
