// describe Student type
// create and export SortType enum
// create SortOrder type

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

type SortOrder = 'asc' | 'desc';

function AverageGradeCalc(gr: number[]): number {
  return gr.reduce((sum: number, n: number) => sum + n, 0) / gr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);

      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? AverageGradeCalc(a[sortBy]) - AverageGradeCalc(b[sortBy])
          : AverageGradeCalc(b[sortBy]) - AverageGradeCalc(a[sortBy]);

      default:
        return 0;
    }
  });
}
