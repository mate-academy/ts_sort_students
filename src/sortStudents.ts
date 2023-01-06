
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

function averageGrades(grades: number[]): number {
  return grades
    .reduce((sum, grade) => (sum + grade), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      copyStudents.sort(
        (a, b) => (order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])),
      );
      break;

    case SortType.Surname:
      copyStudents.sort(
        (a, b) => (order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])),
      );
      break;

    case SortType.Age:
      copyStudents.sort(
        (a, b) => (order === 'asc'
          ? (a[sortBy] - b[sortBy])
          : (b[sortBy] - a[sortBy])),
      );
      break;

    case SortType.Married:
      return copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      copyStudents.sort(
        (a, b) => (order === 'asc'
          ? (averageGrades(a[sortBy]) - averageGrades(b[sortBy]))
          : (averageGrades(b[sortBy]) - averageGrades(a[sortBy]))),
      );
      break;
    default:
  }

  return copyStudents;
}
