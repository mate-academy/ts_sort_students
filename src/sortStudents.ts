
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

function averageGrades(grades: number[]): number {
  return grades
    .reduce((sum:number, grade: number) => (sum + grade), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort(
        (a: Student, b: Student) => (order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])),
      );
      break;

    case SortType.Age:
      copyStudents.sort(
        (a: Student, b: Student) => (order === 'asc'
          ? (a[sortBy] - b[sortBy])
          : (b[sortBy] - a[sortBy])),
      );
      break;

    case SortType.Married:
      return copyStudents.sort((a: Student, b: Student) => ((Number(b[sortBy])
            - Number(a[sortBy]))));

    case SortType.AverageGrade:
      copyStudents.sort(
        (a: Student, b: Student) => (order === 'asc'
          ? (averageGrades(a[sortBy]) - averageGrades(b[sortBy]))
          : (averageGrades(b[sortBy]) - averageGrades(a[sortBy]))),
      );
      break;
    default:
  }

  return copyStudents;
}
