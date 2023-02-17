
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
  AverageGrade = 'grade',
}

export type SortOrder = 'asc' | 'desc';

export function averageGradeCalc(grades: number[]): number {
  return grades
    .reduce((grade: number, sum: number) => grade + sum) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return copyStudents
          .sort((a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]));

      case SortType.Age:
        return copyStudents
          .sort((a: Student, b: Student) => (a[sortBy] - b[sortBy]));

      case SortType.AverageGrade:
        return copyStudents
          .sort((a: Student, b: Student) => averageGradeCalc(a.grades)
            - averageGradeCalc(b.grades));

      default:
        return copyStudents.sort((a, b) => +a[sortBy] - +b[sortBy]);
    }
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents
        .sort((a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
      return copyStudents
        .sort((a: Student, b: Student) => b[sortBy] - a[sortBy]);

    case SortType.AverageGrade:
      return copyStudents
        .sort((a: Student, b: Student) => averageGradeCalc(b.grades)
          - averageGradeCalc(a.grades));

    default:
      return copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);
  }
}
