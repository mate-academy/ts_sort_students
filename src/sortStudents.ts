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

function getAverage(grades: number[]): number {
  return grades.reduce((sum: number, grade: number) => sum + grade, 0)
    / grades.length;
}

// create SortOrder type
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export function sortStudents(students: Student[],
  sortBy: string, order: string): Student[] {
  const copyOfStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents.sort(
        (a: Student, b: Student) => (order === SortOrder.Asc
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])),
      );
      break;

    case SortType.Age:
      copyOfStudents.sort(
        (a: Student, b: Student) => (order === SortOrder.Asc
          ? (a[sortBy] - b[sortBy])
          : (b[sortBy] - a[sortBy])),
      );
      break;

    case SortType.Married:
      return copyOfStudents.sort((a: Student, b: Student) => ((Number(b[sortBy])
        - Number(a[sortBy]))));

    case SortType.AverageGrade:
      copyOfStudents.sort(
        (a: Student, b: Student) => (order === SortOrder.Asc
          ? (getAverage(a[sortBy]) - getAverage(b[sortBy]))
          : (getAverage(b[sortBy]) - getAverage(a[sortBy]))),
      );
      break;
    default:
      break;
  }

  return copyOfStudents;
}
