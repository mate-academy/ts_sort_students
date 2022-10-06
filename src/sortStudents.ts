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
  return grades.reduce((element: number, grade: number) => element + grade, 0)
    / grades.length;
}

// create SortOrder type
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export function sortStudents(students: Student[],
  sortBy: string, order: string): Student[] {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === SortOrder.Asc
        ? copy.sort(
          (a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]),
        )
        : copy.sort(
          (a: Student, b: Student) => b[sortBy].localeCompare(a[sortBy]),
        );

    case SortType.Age:
      return order === SortOrder.Asc
        ? copy.sort((a: Student, b: Student) => (a[sortBy] - b[sortBy]))
        : copy.sort((a: Student, b: Student) => (b[sortBy] - a[sortBy]));

    case SortType.Married:
      return copy.sort((a: Student, b: Student) => ((Number(b[sortBy])
        - Number(a[sortBy]))));

    case SortType.AverageGrade:
      return order === SortOrder.Asc
        ? copy.sort((a: Student, b: Student) => (getAverage(a[sortBy])
          - getAverage(b[sortBy])))
        : copy.sort((a: Student, b: Student) => (getAverage(b[sortBy])
          - getAverage(a[sortBy])));
    default:
      break;
  }

  return copy;
}
