
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
  let sign = 1;

  function sortStudentsFunction(a: Student, b: Student): number {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sign * (a[sortBy].localeCompare(b[sortBy]));

      case SortType.AverageGrade:
        return sign
          * (averageGradeCalc(a.grades) - averageGradeCalc(b.grades));

      case SortType.Age:
      case SortType.Married:
        return sign * (+a[sortBy] - +b[sortBy]);

      default:
        return 0;
    }
  }

  if (order === 'desc') {
    sign = -1;

    return copyStudents.sort(sortStudentsFunction);
  }

  return copyStudents.sort(sortStudentsFunction);
}
