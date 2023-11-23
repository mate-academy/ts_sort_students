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

function averageGrades(grades: number[]): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  const sorting = (a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return a[sortBy].localeCompare(b[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return +a[sortBy] - +b[sortBy];

      case SortType.AverageGrade:
        return averageGrades(a[sortBy]) - averageGrades(b[sortBy]);

      default:
        return 0;
    }
  };

  return order === 'asc'
    ? studentsCopy.sort((a, b) => sorting(a, b))
    : studentsCopy.sort((a, b) => sorting(b, a));
}
