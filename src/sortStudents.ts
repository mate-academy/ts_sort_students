
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? students.map((el) => el)
          .sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : students.map((el) => el)
          .sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? students.map((el) => el)
          .sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]))
        : students.map((el) => el)
          .sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? students.map((el) => el)
          .sort((a, b) => (a.grades
            .reduce((acc, num) => acc + num, 0) / a.grades.length)
              - (b.grades
                .reduce((acc, num) => acc + num, 0)) / b.grades.length)
        : students.map((el) => el)
          .sort((a, b) => (b.grades
            .reduce((acc, num) => acc + num, 0) / b.grades.length)
              - (a.grades
                .reduce((acc, num) => acc + num, 0)) / a.grades.length);

    default:
      throw new Error('unknown sort type');
  }
}
