
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
  sortType: SortType,
  sortOrder: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    const aAverageGrade
      = a.grades.reduce((acc, grade) => acc + grade) / a.grades.length;
    const bAverageGrade
      = b.grades.reduce((acc, grade) => acc + grade) / b.grades.length;

    switch (sortType) {
      case SortType.Name:
      case SortType.Surname:

        return sortOrder === 'asc'
          ? a[sortType].localeCompare(b[sortType])
          : b[sortType].localeCompare(a[sortType]);

      case SortType.Age:
      case SortType.Married:
        return sortOrder === 'asc'
          ? Number(a[sortType]) - Number(b[sortType])
          : Number(b[sortType]) - Number(a[sortType]);

      case SortType.AverageGrade:
        return sortOrder === 'asc'
          ? aAverageGrade - bAverageGrade
          : bAverageGrade - aAverageGrade;

      default:
        return 0;
    }
  });

  return sortedStudents;
}
