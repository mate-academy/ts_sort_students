function getAverageGrade(grades: number[]): number {
  return grades.reduce((prev, next) => (prev + next), 0) / grades.length;
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudentArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? newStudentArr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
        : newStudentArr.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? newStudentArr.sort((a, b) => +a[sortBy] - +b[sortBy])
        : newStudentArr.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? newStudentArr.sort(
          (a, b) => getAverageGrade(a.grades) - getAverageGrade(b.grades),
        )
        : newStudentArr.sort(
          (a, b) => getAverageGrade(b.grades) - getAverageGrade(a.grades),
        );

    default:
      return newStudentArr;
  }
}
