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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrades(grades: number[]): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  const compareStudents = (a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
        return a[sortBy] - b[sortBy];

      case SortType.Married:
        return a[sortBy] && !b[sortBy] ? -1 : 1;

      case SortType.AverageGrade:
        return getAverageGrades(a[sortBy]) - getAverageGrades(b[sortBy]);

      default:
        return 0;
    }
  };

  return order === 'asc'
    ? copyStudents.sort((a, b) => compareStudents(a, b))
    : copyStudents.sort((a, b) => compareStudents(b, a));
}
